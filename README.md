# JB Transfert

Plateforme sécurisée de partage de photos haute résolution par lien public.

## Stack technique

### Backend
- **Runtime** : Node.js (CommonJS)
- **Framework** : Express 5
- **Base de données** : PostgreSQL via Prisma 7
- **Auth** : JWT (`jsonwebtoken`) + hash bcrypt
- **Uploads** : Multer
- **Slugs** : nanoid
- **Dev** : nodemon

### Frontend
- **Framework** : Nuxt 4.5.1 (Vue 3)
- **Langage** : JavaScript (ES modules)
- **Style** : Tailwind CSS 3 (@nuxtjs/tailwindcss 6.14.0)
- **Icônes** : Material Symbols Outlined (Google Fonts)
- **State** : useState Nuxt + composables personnalisés
- **HTTP** : $fetch Nuxt via `useApi.js`
- **Dev** : nuxt dev

## Structure du projet

```
jb-transfert/
├── backend/                     # API Express + Prisma
│   ├── app.js
│   ├── server.js
│   ├── config/env.js
│   ├── lib/prisma.js
│   ├── lib/slug.js
│   ├── prisma/schema.prisma
│   ├── middlewares/
│   ├── services/
│   ├── controllers/
│   ├── routes/
│   ├── lib/generated/prisma/
│   ├── package.json
│   └── package-lock.json
│
├── frontend/                    # Application Nuxt
│   ├── nuxt.config.ts
│   ├── tailwind.config.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .env
│   └── app/
│       ├── app.vue
│       ├── layouts/
│       │   ├── default.vue      # Layout espace authentifié
│       │   └── public.vue       # Layout page publique /g/[slug]
│       ├── middleware/
│       │   └── auth.global.js   # Protection des routes privées
│       ├── plugins/
│       │   └── api.client.js    # Configuration $fetch
│       ├── composables/
│       │   ├── useApi.js        # Wrapper HTTP (get/post/patch/delete/upload)
│       │   ├── useAuth.js       # État session (user/token/login/logout)
│       │   ├── useGalleries.js  # CRUD galeries
│       │   └── useUpload.js     # Upload photos + progression
│       ├── components/
│       │   ├── ui/
│       │   │   ├── AppButton.vue
│       │   │   ├── AppModal.vue
│       │   │   ├── AppSpinner.vue
│       │   │   └── AppInput.vue
│       │   ├── auth/
│       │   │   ├── LoginForm.vue
│       │   │   └── RegisterForm.vue
│       │   ├── gallery/
│       │   │   ├── GalleryCard.vue
│       │   │   ├── GalleryGrid.vue
│       │   │   ├── GalleryHeader.vue
│       │   │   └── ShareLinkBox.vue
│       │   ├── upload/
│       │   │   ├── UploadDropzone.vue
│       │   │   ├── UploadProgressList.vue
│       │   │   └── UploadErrorBanner.vue
│       │   └── viewer/
│       │       ├── PhotoLightbox.vue
│       │       └── DownloadButton.vue
│       ├── pages/
│       │   ├── index.vue        # Landing page publique
│       │   ├── login.vue        # Connexion
│       │   ├── register.vue     # Inscription
│       │   ├── profile.vue      # Profil utilisateur
│       │   ├── admin/
│       │   │   └── index.vue    # Dashboard admin (anticipé)
│       │   └── galleries/
│       │       ├── index.vue    # Liste des galeries
│       │       ├── new.vue      # Création galerie
│       │       └── [id]/
│       │           ├── index.vue # Détail + upload
│       │           └── settings.vue # Réglages galerie
│       │   └── g/
│       │       └── [slug].vue   # Page publique consultation
│       └── assets/
│           ├── css/main.css
│           └── images/
│               ├── landing-hero.svg
│               ├── gallery-placeholder.svg
│               ├── lightbox-placeholder.svg
│               └── empty-gallery.svg
│
├── doc/
│   ├── architecture-frontend-jb-transfert.md
│   └── description-maquettes-stitch-jb-transfert.md
│
├── stitch_jb_transfert_interface (2)/
│   └── stitch_jb_transfert_interface/  # Maquettes Stitch
│       ├── jb_transfert_accueil/
│       ├── jb_transfert_connexion_1/
│       ├── jb_transfert_cr_ation_de_compte/
│       ├── gestion_des_galeries_jb_transfert/
│       ├── d_tail_de_la_galerie/
│       └── vue_publique_galerie/
│
└── README.md
```

## État du projet

### Backend
- ✅ API complète fonctionnelle
- ✅ Auth JWT + bcrypt
- ✅ CRUD galeries + upload photos
- ✅ Route publique `/g/:slug`
- ✅ Sécurité : vérification propriété, messages d'erreur génériques
- ⏳ Dashboard admin : prévu mais pas implémenté

### Frontend — en cours de construction

#### ✅ Réalisé
- Design system Tailwind complet (couleurs, typographie, spacing)
- Composants UI réutilisables (`AppButton`, `AppModal`, `AppSpinner`, `AppInput`)
- Composants domaine (`LoginForm`, `RegisterForm`, `GalleryCard`, `GalleryGrid`, `GalleryHeader`, `ShareLinkBox`, `UploadDropzone`, `UploadProgressList`, `UploadErrorBanner`, `PhotoLightbox`, `DownloadButton`)
- Pages : landing, login, register, liste galeries, création galerie, détail galerie, settings galerie, page publique `/g/[slug]`, profil, admin (placeholder)
- Layouts : `default.vue` (espace authentifié), `public.vue` (espace public)
- Middleware auth global
- Composable `useAuth` (login/logout/token)
- Composable `useApi` (HTTP + injection token)
- Composable `useUpload` (validation + progression XHR)
- Dossier `assets/images/` avec placeholders SVG

#### ⏳ En cours / à finir
- Nettoyage final des icônes Material Symbols sur la landing page
- Corrections de style sur la landing page
- Tests de navigation complets

#### 🔜 À venir
- Page “Mot de passe oublié”
- Recherche/filtres/pagination des galeries
- Déplacement de galeries
- Suppression multiple de photos
- Protection par mot de passe des galeries
- Dashboard admin complet

## Installation

### Backend

```bash
cd backend
npm install
cp .env.example .env
# Éditer .env avec vos paramètres
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

### Frontend

```bash
cd frontend
npm install
cp .env.example .env
# Vérifier NUXT_PUBLIC_API_BASE=http://localhost:3001
npm run dev
```

## Variables d'environnement

### Backend (`backend/.env`)
| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | Chaîne de connexion PostgreSQL |
| `JWT_SECRET` | Secret pour signer les tokens JWT |
| `PORT` | Port du serveur (défaut : 3001) |
| `UPLOAD_DIR` | Répertoire de stockage des uploads |
| `MAX_FILE_SIZE_MB` | Taille max par fichier uploadé |

### Frontend (`frontend/.env`)
| Variable | Description |
|----------|-------------|
| `NUXT_PUBLIC_API_BASE` | URL de l'API backend (défaut : http://localhost:3001) |

## Développement

```bash
# Backend
cd backend && npm run dev

# Frontend
cd frontend && npm run dev
```

Le frontend démarre sur `http://localhost:3000`.
Le backend démarre sur `http://localhost:3001`.

## Licence

ISC
# jb_trasnfert
