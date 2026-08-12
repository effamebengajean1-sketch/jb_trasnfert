# Backend JB Transfert

API Node.js/Express pour la gestion de galeries photos avec partage public par lien.

## Stack technique

- **Runtime** : Node.js (CommonJS)
- **Framework** : Express 5
- **Base de données** : PostgreSQL via Prisma 7
- **Auth** : JWT (`jsonwebtoken`) + hash bcrypt
- **Uploads** : Multer
- **Slugs** : nanoid
- **Dev** : nodemon

## Structure du projet

```
backend/
├── app.js                     # Montage Express, middlewares globaux, routes
├── server.js                  # Point d'entrée (listen)
├── config/
│   └── env.js                 # Variables d'environnement + validation
├── lib/
│   ├── prisma.js              # Singleton Prisma (adapter pg explicite)
│   └── slug.js                # Génération de slugs uniques pour les liens de partage
├── prisma/
│   └── schema.prisma          # Schéma : Utilisateur / Galerie / Photo
├── middlewares/
│   ├── auth.middleware.js     # Vérification JWT + injection req.user
│   ├── upload.middleware.js   # Multer : validation format/taille, stockage disque
│   └── errorHandler.middleware.js # Filet de sécurité global (Multer + erreurs serveur)
├── services/
│   ├── auth.service.js        # Hash, JWT, CRUD utilisateur
│   ├── gallery.service.js     # CRUD galeries + slug unique
│   ├── upload.service.js      # Enregistrement métadonnées photo + suppression fichier
│   └── public.service.js      # Lecture publique d'une galerie par slug
├── controllers/
│   ├── auth.controller.js     # Register / Login
│   ├── gallery.controller.js  # CRUD galeries (avec vérification propriétaire)
│   ├── upload.controller.js   # Upload / suppression de photos
│   └── public.controller.js   # Consultation publique par slug
├── routes/
│   ├── auth.routes.js         # POST /auth/register, /auth/login
│   ├── gallery.routes.js      # CRUD /galleries (toutes protégées)
│   ├── upload.routes.js       # POST /galleries/:id/upload, DELETE /galleries/:id/photos/:photoId
│   └── public.routes.js       # GET /g/:slug (seule route publique)
├── lib/generated/prisma/      # Client Prisma généré
├── package.json
└── package-lock.json
```

## Modèle de données

### Utilisateur
| Champ | Type | Contrainte |
|-------|------|------------|
| id | String (cuid) | PK |
| email | String | Unique |
| motDePasseHash | String | — |
| nom | String | — |
| dateCreation | DateTime | Default now |

### Galerie
| Champ | Type | Contrainte |
|-------|------|------------|
| id | String (cuid) | PK |
| titre | String | — |
| slug | String | Unique (lien de partage) |
| dateCreation | DateTime | Default now |
| utilisateurId | String | FK → Utilisateur (Cascade on delete) |

### Photo
| Champ | Type | Contrainte |
|-------|------|------------|
| id | String (cuid) | PK |
| nomFichier | String | Nom original |
| cheminFichier | String | Nom unique sur disque |
| tailleOctets | Int | — |
| formatMime | String | — |
| dateUpload | DateTime | Default now |
| galerieId | String | FK → Galerie (Cascade on delete) |

## Prérequis

- Node.js >= 18
- PostgreSQL >= 14
- npm

## Installation

```bash
cd backend
npm install
```

## Configuration

Copier `.env.example` en `.env` et renseigner :

```env
DATABASE_URL="postgresql://user:password@localhost:5432/jb_transfert"
JWT_SECRET="votre_secret_jwt_solide"
PORT="3001"
UPLOAD_DIR="./uploads"
MAX_FILE_SIZE_MB="10"
```

### Variables d'environnement

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | Chaîne de connexion PostgreSQL |
| `JWT_SECRET` | Secret pour signer les tokens JWT |
| `PORT` | Port du serveur (défaut : 3001) |
| `UPLOAD_DIR` | Répertoire de stockage des uploads |
| `MAX_FILE_SIZE_MB` | Taille max par fichier uploadé |

## Base de données

### Générer le client Prisma

```bash
npx prisma generate
```

### Appliquer les migrations

```bash
npx prisma migrate dev --name init
```

### (Optionnel) Ouvrir Prisma Studio

```bash
npx prisma studio
```

## Lancement

### Développement (avec rechargement automatique)

```bash
npm run dev
```

### Production

```bash
npm start
```

Le serveur démarre sur `http://localhost:3001`.

## Endpoints

### Authentification (publiques)

| Méthode | Route | Description |
|---------|-------|-------------|
| POST | `/auth/register` | Crée un compte + renvoie un token (connexion auto) |
| POST | `/auth/login` | Vérifie identifiants + renvoie un token |

Body `POST /auth/register` :
```json
{
  "email": "user@example.com",
  "motDePasse": "secret",
  "nom": "Jean"
}
```

Body `POST /auth/login` :
```json
{
  "email": "user@example.com",
  "motDePasse": "secret"
}
```

### Galeries (protégées — header `Authorization: Bearer <token>` requis)

| Méthode | Route | Description |
|---------|-------|-------------|
| POST | `/galleries` | Crée une galerie |
| GET | `/galleries` | Liste les galeries de l'utilisateur |
| GET | `/galleries/:id` | Détail d'une galerie (avec photos) |
| PATCH | `/galleries/:id` | Renomme une galerie |
| DELETE | `/galleries/:id` | Supprime une galerie (cascade) |

### Uploads (protégées)

| Méthode | Route | Description |
|---------|-------|-------------|
| POST | `/galleries/:id/upload` | Upload d'une photo (form-data, champ `photo`) |
| DELETE | `/galleries/:id/photos/:photoId` | Supprime une photo (fichier + DB) |

Form-data `POST /galleries/:id/upload` :
- Champ : `photo`
- Formats acceptés : JPG, PNG, GIF, WebP, HEIC/HEIF
- Taille max : définie par `MAX_FILE_SIZE_MB`

### Publique (sans authentification)

| Méthode | Route | Description |
|---------|-------|-------------|
| GET | `/g/:slug` | Récupère une galerie par son lien de partage |

### Autre

| Méthode | Route | Description |
|---------|-------|-------------|
| GET | `/health` | Healthcheck |
| GET | `/uploads/:filename` | Fichiers uploadés (statique) |

## Authentification

Le middleware `requireAuth` vérifie le header `Authorization: Bearer <token>`.

- Token valide 7 jours.
- En cas d'échec, réponse `401` avec message volontairement vague.
- `req.user` est injecté avec l'utilisateur complet.

## Sécurité

- **Mots de passe** : hash bcrypt (10 rounds), jamais renvoyés au client.
- **JWT** : secret serveur uniquement, expiration 7 jours.
- **Messages d'erreur auth** : volontairement génériques pour ne pas révéler si un email existe.
- **Routes publiques isolées** : seul `/g/:slug` et `/health` sont publics. Aucune route privée ne doit être ajoutée dans `public.routes.js`.
- **Vérification de propriété** : chaque opération sur une galerie/photo vérifie que `utilisateurId === req.user.id`.
- **Upload** : validation du format MIME et de la taille avant écriture disque.
- **Fichiers statiques** : servis depuis `/uploads` par Express.

## Choix d'architecture

- **Séparation stricte** : routes → controllers → services → Prisma. Les services ne connaissent pas `req/res`.
- **Slugs immuables** : une fois générés, les slugs ne sont jamais modifiés pour casser les liens de partage.
- **Cascade DB** : suppression d'une galerie supprime ses photos en base, mais les fichiers physiques sont nettoyés séparément par le service upload.
- **Prisma 7 + adapter pg explicite** : l'URL dans `schema.prisma` est pour la CLI uniquement ; la connexion runtime passe par `@prisma/adapter-pg`.
- **Singleton Prisma** : `globalThis` pour éviter l'épuisement des connexions avec nodemon.

## Développement

### Commandes utiles

```bash
npm run dev        # Serveur avec nodemon
npm start          # Serveur production
npx prisma generate # Générer le client après modification du schéma
npx prisma migrate dev --name <nom> # Nouvelle migration
npx prisma studio  # Interface visuelle de la DB
```

### Arborescence des imports

- `app.js` monte les routes.
- Chaque fichier de routes ne fait que déclarer les endpoints.
- Les controllers orchestrent `req/res` et appellent les services.
- Les services contiennent la logique métier et accèdent à Prisma.
- Les middlewares sont appliqués route par route.

## Licence

ISC
