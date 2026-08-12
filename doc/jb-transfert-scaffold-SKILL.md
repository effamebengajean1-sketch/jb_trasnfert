---
name: jb-transfert-scaffold
description: Génère du code pour les tâches répétitives du projet JB Transfert (anciennement JP Studio — plateforme de partage d'images en qualité originale, ouverte à tout utilisateur et plus seulement aux photographes) — nouvelle route/endpoint Express, nouvelle page ou composant Nuxt 3, ou nouveau modèle/migration Prisma. Utilise cette skill dès que l'utilisateur mentionne JB Transfert (ou JP Studio) en lien avec la création d'une route, d'un endpoint, d'une page, d'un composant, ou d'un modèle de données, même sans le mot "scaffold". S'appuie sur les conventions établies du projet (voir skill jb-transfert pour le contexte général et le périmètre Phase 1) et respecte strictement la stack Express/Nuxt/Prisma sans réintroduire NestJS ou React.
---

# JB Transfert — Scaffold de tâches répétitives

Cette skill génère du code respectant les conventions du projet JB Transfert
(anciennement JP Studio) pour trois types de tâches récurrentes. Elle
complète la skill `jb-transfert` (contexte général, périmètre Phase 1) —
consulter les deux si besoin.

> Note : le projet s'appelait JP Studio et s'adressait aux photographes
> professionnels. Il s'appelle désormais JB Transfert et s'adresse à toute
> personne souhaitant partager des images en bonne qualité. Le vocabulaire
> "galerie" est conservé (concept technique), mais "photographe" est à
> remplacer par "utilisateur" dans les nouveaux contenus générés.

⚠️ Ces conventions sont un premier brouillon à valider avec l'utilisateur avant
la première génération réelle si elles n'ont jamais été confirmées sur ce projet.

## 1. Nouvelle route/endpoint Express

**Structure des fichiers** (un fichier par responsabilité, pas de sur-ingénierie) :
- `routes/<ressource>.routes.js` — déclaration des routes, branchement des middlewares
- `controllers/<ressource>.controller.js` — logique de la requête (parsing, appel service, réponse)
- `services/<ressource>.service.js` — logique métier / accès Prisma

**Format de réponse** : JSON brut, SANS enveloppe `{ success, message, data }`.
Cette enveloppe a causé un bug de déconnexion dans l'ancienne version NestJS
(voir skill jp-studio) — on l'évite explicitement en Phase 1.
- Succès : renvoyer directement l'objet/la liste demandée avec le bon code HTTP
- Erreur : `{ error: "message clair" }` avec code HTTP approprié (400/401/404/500)

**Authentification** : middleware `requireAuth` (à importer depuis
`middlewares/auth.middleware.js`) appliqué explicitement sur les routes qui en
ont besoin, jamais globalement.

**Gestion des erreurs** : try/catch dans chaque controller, pas de middleware
d'erreur centralisé pour l'instant (cohérent avec la simplicité Phase 1).

## 2. Nouvelle page/composant Nuxt 3

- **Composition API** avec `<script setup>` systématiquement
- **Emplacement** : `pages/` pour les routes, `components/` pour le réutilisable
- **Appels API** : via un composable dédié `composables/useApi.js` (wrapper autour
  de `$fetch`), pas d'appels directs dispersés dans les composants
- **Style** : classes utilitaires Tailwind directement dans le template

## 3. Nouveau modèle/migration Prisma

- **Nommage des champs** : camelCase dans le schéma Prisma (Prisma gère le mapping
  vers snake_case en base si besoin via `@map`)
- **Relations** : `onDelete: Cascade` par défaut sauf indication contraire de
  l'utilisateur (ex : ne pas supprimer les galeries si le photographe est supprimé,
  à confirmer au cas par cas)
- Après modification du schéma : rappeler à l'utilisateur de lancer
  `npx prisma migrate dev --name <description>` — ne pas l'exécuter automatiquement
  sans confirmation, car ça touche la base de données

## Rappel de périmètre

Avant de générer du code, vérifier que la tâche reste dans le périmètre Phase 1
(voir skill `jb-transfert`) : pas de paiements, favoris, commandes,
notifications, ni de traitement d'image. Si la demande sort de ce périmètre,
le signaler avant de générer quoi que ce soit.
