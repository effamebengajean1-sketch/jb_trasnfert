// Déclaration pure des routes Public.
// ⚠️ AUCUN middleware d'authentification ici, c'est volontaire : ce
// fichier est le seul point d'accès non protégé de l'API, pour le
// visiteur qui consulte une galerie via son lien de partage. Ne jamais
// ajouter requireAuth ici, et ne jamais ajouter de route privée dans ce
// fichier par erreur — créer plutôt une nouvelle route dans un fichier
// protégé si besoin d'authentification.

const express = require('express');
const router = express.Router();
const publicController = require('../controllers/public.controller');

router.get('/:slug', publicController.getBySlug);

module.exports = router;