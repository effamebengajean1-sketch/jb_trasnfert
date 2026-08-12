# Cahier des charges — JB Transfert

## 1. Présentation du projet

JB Transfert (anciennement JP Studio) est une plateforme de partage d'images
en qualité originale. Elle permet à toute personne souhaitant partager des
photos de bonne qualité — et pas seulement aux photographes professionnels —
de déposer des images, de les organiser en galeries, et de les partager par
lien vers des destinataires.

**Marché cible** : Afrique, avec le Cameroun en priorité. Le paiement via
Mobile Money (MTN MoMo, Orange Money) est prévu pour une phase ultérieure.

## 2. Historique et positionnement

Le projet a démarré sous le nom JP Studio, avec une architecture ambitieuse
(monorepo Turborepo, NestJS, React, modules paiements/favoris/commandes/
notifications) et un positionnement centré sur les photographes
professionnels. Cette version s'est révélée trop complexe à gérer seul, et le
projet a été volontairement simplifié — voir le périmètre Phase 1 ci-dessous.

Le projet s'appelle désormais **JB Transfert** et élargit son public : il ne
s'adresse plus uniquement aux photographes, mais à toute personne ou
organisation souhaitant transférer/partager des images en qualité originale
(particuliers, entreprises, événementiel, etc.).

## 3. Stack technique (Phase 1 — inchangée)

| Composant       | Choix                              |
|-----------------|-------------------------------------|
| Backend         | Express.js (minimaliste, sans NestJS) |
| Frontend        | Nuxt 3 / Vue.js (sans React)        |
| ORM / Base      | Prisma + PostgreSQL                 |
| Stockage fichiers | Dossier `uploads/` local, noms de fichiers uniques |

## 4. Périmètre fonctionnel Phase 1

### 4.1 Fonctionnalités à livrer
- **Authentification utilisateur** : compte sécurisé (inscription, connexion) —
  terme générique "utilisateur", plus "photographe"
- **Gestion des galeries/dossiers de partage** : création et listing par
  l'utilisateur
- **Upload d'images** :
  - Une ou plusieurs images par galerie
  - Aucune transformation de l'image : pas de resize, compression, ni
    génération de miniatures/résolutions multiples — l'image reste exactement
    telle que déposée
  - Formats supportés : JPG, PNG, GIF, WebP, HEIC
  - Taille maximale : 50 Mo par fichier
- **Partage** : chaque galerie dispose d'un lien unique (slug), accessible
  sans authentification
- **Consultation destinataire** : affichage des photos en grille, zoom, et
  téléchargement en qualité d'origine

### 4.2 Explicitement hors périmètre Phase 1
- Paiements (Stripe, MTN MoMo, Orange Money)
- Favoris / sélections
- Commandes et impressions
- Notifications
- Traitement d'image (compression, multi-résolutions, watermarking)

## 5. Roadmap future (non construite en Phase 1)

- Packaging mobile via Capacitor (APK) ou en PWA — le frontend Nuxt doit
  rester responsive et l'API bien découplée pour ne pas bloquer cette évolution
- Support de fichiers lourds au-delà des photos (vidéos, RAW, etc.)
- Réintroduction progressive des modules mis de côté (paiements, favoris...)
  une fois le cœur du produit stable et utilisé
- Éventuelle segmentation de l'offre par type de public (particuliers vs
  professionnels) si les usages divergent après lancement

## 6. Contraintes et points de vigilance

- **Format des réponses API** : ne pas reproduire l'enveloppe
  `{ success, message, data }` de l'ancienne version NestJS, qui avait causé
  un bug de déconnexion côté frontend. Réponses JSON brutes en Phase 1.
- **Imports relatifs** : vérifier systématiquement les chemins entre `hooks/`,
  `store/`, `services/`, etc.
- **Secrets** : ne jamais faire figurer de vrais secrets (tokens, clés API,
  mots de passe) dans le code ou la documentation — utiliser des placeholders.
- **Vocabulaire** : dans le code et les nouveaux contenus, préférer les termes
  génériques ("utilisateur", "galerie") à "photographe" pour refléter le
  public élargi. Le renommage complet des anciennes occurrences dans du code
  existant est à faire progressivement, pas nécessairement en un seul passage.

## 7. Arborescence du projet

```
jb-transfert/
├── backend/
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── gallery.routes.js
│   │   └── upload.routes.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── gallery.controller.js
│   │   └── upload.controller.js
│   ├── services/
│   │   ├── auth.service.js
│   │   ├── gallery.service.js
│   │   └── upload.service.js
│   ├── middlewares/
│   │   └── auth.middleware.js
│   ├── lib/
│   │   └── prisma.js
│   ├── uploads/                  # stockage local des fichiers déposés
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── app.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── pages/
│   │   ├── index.vue
│   │   ├── login.vue
│   │   ├── galleries/
│   │   │   ├── index.vue          # liste des galeries de l'utilisateur
│   │   │   └── [id].vue           # gestion d'une galerie (upload, etc.)
│   │   └── g/
│   │       └── [slug].vue         # page publique de partage (sans auth)
│   ├── components/
│   │   ├── GalleryGrid.vue
│   │   ├── PhotoLightbox.vue
│   │   └── UploadDropzone.vue
│   ├── composables/
│   │   └── useApi.js
│   ├── layouts/
│   │   └── default.vue
│   ├── nuxt.config.ts
│   └── package.json
│
└── README.md
```

> Structure inchangée par rapport à la version JP Studio — le renommage et
> l'élargissement du public n'impactent pas l'architecture technique, sauf
> éventuellement le vocabulaire dans le code (voir section 6).
