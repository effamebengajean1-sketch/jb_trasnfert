# Architecture technique — Frontend JB Transfert (Nuxt 3)

## 1. Vue d'ensemble

Le frontend est une application **Nuxt 3 / Vue 3** utilisant la Composition
API (`<script setup>`) de façon systématique. Il communique avec le backend
Express via un composable centralisé (`useApi`), sans état global complexe
(pas de Pinia en Phase 1 — l'état reste local aux pages/composants ou géré via
`useState` de Nuxt quand un partage inter-composants est nécessaire).

Deux grandes zones fonctionnelles à distinguer clairement dans le découpage :
1. **Espace authentifié** (le compte utilisateur qui dépose des images)
2. **Espace public** (le destinataire qui consulte une galerie via un lien, sans authentification)

Cette distinction structure les pages, les layouts, et la logique
d'authentification.

## 2. Arborescence détaillée

```
frontend/
├── pages/
│   ├── index.vue                    # Landing page publique
│   ├── login.vue                    # Connexion
│   ├── register.vue                 # Inscription
│   ├── galleries/
│   │   ├── index.vue                # Liste des galeries de l'utilisateur connecté
│   │   ├── new.vue                  # Création d'une nouvelle galerie
│   │   └── [id]/
│   │       ├── index.vue            # Détail d'une galerie (gestion, upload)
│   │       └── settings.vue         # Réglages de la galerie (renommer, supprimer, lien de partage)
│   └── g/
│       └── [slug].vue               # Page publique de consultation (sans auth)
│
├── components/
│   ├── auth/
│   │   ├── LoginForm.vue
│   │   └── RegisterForm.vue
│   ├── gallery/
│   │   ├── GalleryCard.vue          # Carte résumé dans la liste
│   │   ├── GalleryGrid.vue          # Grille de photos (utilisée en espace privé ET public)
│   │   ├── GalleryHeader.vue        # Titre, actions (partager, supprimer)
│   │   └── ShareLinkBox.vue         # Affichage/copie du lien de partage
│   ├── upload/
│   │   ├── UploadDropzone.vue       # Zone de dépôt drag & drop
│   │   ├── UploadProgressList.vue   # Liste des fichiers en cours d'upload + progression
│   │   └── UploadErrorBanner.vue    # Erreurs (format non supporté, taille > 50 Mo)
│   ├── viewer/
│   │   ├── PhotoLightbox.vue        # Visionneuse plein écran avec zoom
│   │   └── DownloadButton.vue       # Téléchargement qualité d'origine
│   └── ui/
│       ├── AppButton.vue            # Composants UI génériques réutilisables
│       ├── AppModal.vue
│       └── AppSpinner.vue
│
├── composables/
│   ├── useApi.js                    # Wrapper $fetch : base URL, headers auth, gestion d'erreurs
│   ├── useAuth.js                   # État de session (utilisateur courant, login/logout)
│   ├── useGalleries.js              # Logique métier : lister/créer/supprimer des galeries
│   └── useUpload.js                 # Logique d'upload : validation format/taille, suivi progression
│
├── middleware/
│   └── auth.global.js               # Redirige vers /login si route privée sans session valide
│
├── layouts/
│   ├── default.vue                  # Layout espace authentifié (nav, header utilisateur)
│   └── public.vue                   # Layout épuré pour les pages /g/[slug] (sans nav privée)
│
├── plugins/
│   └── api.client.js                # Configuration client $fetch (interceptors, base URL env)
│
├── assets/
│   └── css/
│       └── main.css                 # Imports Tailwind + styles globaux minimes
│
├── nuxt.config.ts
└── package.json
```

## 3. Détail des modules

### 3.1 `pages/` — Routing

- Convention Nuxt standard : un fichier = une route. Les dossiers dynamiques
  (`[id]`, `[slug]`) portent les paramètres d'URL.
- **`galleries/`** est protégé par le middleware `auth.global.js` : toute
  route sous ce préfixe exige une session valide.
- **`g/[slug].vue`** est explicitement exclue de la protection (accès public
  par lien, cœur du produit) — voir section 3.4.

### 3.2 `components/` — Découpage par domaine, pas par type

Le découpage suit les **domaines fonctionnels** (`auth/`, `gallery/`,
`upload/`, `viewer/`) plutôt qu'une organisation générique par type de
composant. Seul `ui/` regroupe des composants transverses sans logique
métier (boutons, modales, spinners), réutilisables partout.

Règle de composition : `GalleryGrid.vue` est volontairement partagé entre
l'espace privé (page `galleries/[id]/index.vue`) et l'espace public (page
`g/[slug].vue`) — il reçoit les photos en props et n'a aucune connaissance de
qui consulte (authentifié ou non). C'est le composant parent (la page) qui
gère le contexte auth, pas le composant d'affichage.

### 3.3 `composables/` — Logique réutilisable

| Composable      | Rôle |
|------------------|------|
| `useApi.js`      | Point d'entrée unique vers le backend. Construit les requêtes `$fetch`, injecte le token d'auth si présent, centralise le format d'erreur (`{ error: string }`, cohérent avec le backend Express). |
| `useAuth.js`     | Expose `user`, `isAuthenticated`, `login()`, `logout()`. Utilise `useState('auth-user')` de Nuxt pour partager l'état entre composants sans Pinia. |
| `useGalleries.js`| Encapsule les appels CRUD galeries (`fetchGalleries`, `createGallery`, `deleteGallery`) au-dessus de `useApi`. |
| `useUpload.js`   | Valide côté client (format parmi JPG/PNG/GIF/WebP/HEIC, taille ≤ 50 Mo) avant envoi, suit la progression de l'upload multipart. |

Principe : les composants ne font **jamais** d'appel `$fetch` directement —
tout passe par un composable dédié. Ça isole les changements d'API backend à
un seul endroit.

### 3.4 `middleware/` — Séparation auth / public

`auth.global.js` s'exécute sur chaque navigation et vérifie si la route
cible nécessite une session (toutes les routes sauf `/`, `/login`,
`/register`, et `/g/[slug]`). C'est le point unique de vérité pour la
distinction espace privé / espace public — éviter de dupliquer cette logique
dans les pages individuelles.

### 3.5 `layouts/` — Deux expériences visuelles distinctes

- `default.vue` : navigation complète, header avec utilisateur connecté,
  utilisé par toutes les pages privées.
- `public.vue` : layout minimal (pas de nav privée, pas d'info compte),
  utilisé uniquement par `g/[slug].vue` — le destinataire ne doit jamais
  voir d'éléments d'interface réservés aux utilisateurs inscrits.

### 3.6 `plugins/`

`api.client.js` configure l'instance `$fetch` globale (base URL depuis
`runtimeConfig`, gestion centralisée des erreurs réseau) consommée par
`useApi.js`. Séparé du composable pour rester dans les conventions Nuxt
(plugins pour la configuration globale, composables pour la logique métier).

## 4. Flux de données type : upload d'une image

```
UploadDropzone.vue (composant)
  → useUpload.js (composable : validation + suivi progression)
    → useApi.js (composable : requête HTTP authentifiée)
      → plugins/api.client.js ($fetch configuré)
        → backend Express : POST /galleries/:id/upload
```

Aucune couche ne saute d'étape : les composants ne connaissent que leur
composable métier, jamais `useApi` ou `$fetch` directement.

## 5. Conventions transverses

- **Nommage des fichiers composants** : PascalCase (`GalleryGrid.vue`)
- **Nommage des composables** : camelCase avec préfixe `use` (`useGalleries.js`)
- **Props/emits** : toujours typés explicitement (`defineProps<{ ... }>()`),
  pas de props implicites
- **Style** : classes utilitaires Tailwind dans le template ; `assets/css/main.css`
  réservé aux imports Tailwind et à de très rares overrides globaux
- **Pas de Pinia en Phase 1** : si l'état partagé devient trop complexe pour
  `useState`, réévaluer à ce moment-là plutôt que d'anticiper

## 6. Cohérence avec la roadmap Capacitor/PWA

Ce découpage (composants sans dépendance au routing, composables isolant les
appels réseau, layouts séparés) est pensé pour ne pas bloquer un futur
wrapping Capacitor : aucune logique métier n'est couplée à des API
strictement web (pas de `window`/`document` direct dans les composables,
tout passe par des abstractions Nuxt).
