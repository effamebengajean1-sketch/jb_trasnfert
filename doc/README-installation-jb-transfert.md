# JB Transfert — Installation

Plateforme de partage d'images en qualité originale. Backend Express +
Prisma/PostgreSQL, frontend Nuxt 3.

## 1. Prérequis

| Outil | Version recommandée | Vérifier avec |
|---|---|---|
| Node.js | 20 LTS ou supérieur | `node -v` |
| npm | 10+ (fourni avec Node 20) | `npm -v` |
| PostgreSQL | 15 ou supérieur | `psql --version` |
| Git | — | `git --version` |

> Optionnel : Docker, si vous préférez lancer PostgreSQL en conteneur plutôt
> qu'en installation locale (voir section 5).

## 2. Structure du dépôt

```
jb-transfert/
├── backend/     # API Express + Prisma
└── frontend/    # Application Nuxt 3
```

Les deux parties ont leurs propres dépendances et se lancent séparément.

## 3. Installation du backend

```bash
cd backend
npm install
```

**Dépendances principales attendues** (`package.json`) :
- `express` — serveur HTTP
- `@prisma/client` + `prisma` (dev) — accès base de données
- `multer` — gestion des uploads multipart
- `bcrypt` — hash des mots de passe
- `jsonwebtoken` — génération/vérification des tokens d'authentification
- `dotenv` — chargement des variables d'environnement
- `nanoid` — génération des slugs uniques de partage

### 3.1 Variables d'environnement (`backend/.env`)

Créer le fichier à partir d'un exemple :

```bash
cp .env.example .env
```

Contenu attendu :

```env
DATABASE_URL="postgresql://<user>:<password>@localhost:5432/jb_transfert"
JWT_SECRET="remplacer_par_une_valeur_secrete_longue"
PORT=3001
UPLOAD_DIR="./uploads"
MAX_FILE_SIZE_MB=50
```

> Ne jamais committer le `.env` réel — seul `.env.example` (avec des valeurs
> placeholder) doit être versionné.

### 3.2 Base de données

```bash
# Créer la base PostgreSQL (si pas encore fait)
createdb jb_transfert

# Appliquer le schéma Prisma
npx prisma migrate dev --name init

# (optionnel) Ouvrir l'explorateur de données Prisma
npx prisma studio
```

### 3.3 Dossier d'upload

```bash
mkdir -p uploads
```

Ce dossier stocke les fichiers déposés en local (Phase 1) — à exclure du
versioning (`uploads/` dans `.gitignore`).

### 3.4 Lancer le backend

```bash
npm run dev
```

Le serveur doit démarrer sur `http://localhost:3001` (ou le port défini dans
`.env`).

## 4. Installation du frontend

```bash
cd frontend
npm install
```

**Dépendances principales attendues** :
- `nuxt` (3.x)
- `vue` (3.x)
- `@nuxtjs/tailwindcss` — styles utilitaires
- Aucune dépendance de state management lourde en Phase 1 (pas de Pinia —
  voir architecture frontend)

### 4.1 Variables d'environnement (`frontend/.env`)

```env
NUXT_PUBLIC_API_BASE="http://localhost:3001"
```

### 4.2 Lancer le frontend

```bash
npm run dev
```

L'application doit démarrer sur `http://localhost:3000`.

## 5. Alternative : PostgreSQL via Docker

Si PostgreSQL n'est pas installé localement :

```bash
docker run --name jb-transfert-db \
  -e POSTGRES_USER=jb \
  -e POSTGRES_PASSWORD=jb \
  -e POSTGRES_DB=jb_transfert \
  -p 5432:5432 \
  -d postgres:15
```

Adapter `DATABASE_URL` dans `backend/.env` en conséquence :
```env
DATABASE_URL="postgresql://jb:jb@localhost:5432/jb_transfert"
```

## 6. Vérification de l'installation

1. Backend lancé sans erreur sur le port configuré
2. `npx prisma studio` affiche les tables `Utilisateur`, `Galerie`, `Photo`
   sans erreur de connexion
3. Frontend lancé, page d'accueil accessible sur `http://localhost:3000`
4. Test bout en bout : créer un compte depuis le frontend → vérifier la
   ligne créée dans Prisma Studio

## 7. Problèmes fréquents

| Symptôme | Cause probable |
|---|---|
| `ECONNREFUSED` sur `DATABASE_URL` | PostgreSQL non démarré, ou mauvais port/identifiants |
| Erreur Prisma "table does not exist" | Migration non appliquée — relancer `npx prisma migrate dev` |
| Upload rejeté systématiquement | Vérifier `UPLOAD_DIR` existant et `MAX_FILE_SIZE_MB` dans `.env` |
| 401 sur toutes les routes protégées | `JWT_SECRET` différent entre génération et vérification du token, ou absent |
