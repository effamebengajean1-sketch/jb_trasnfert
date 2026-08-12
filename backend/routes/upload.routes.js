// Déclaration pure des routes Upload. L'ordre des middlewares compte :
// requireAuth d'abord (rejette vite si pas de token), puis uploadMiddleware
// (Multer valide format/taille et écrit sur disque), puis le controller.

const express = require('express');
const router = express.Router({ mergeParams: true });
const requireAuth = require('../middlewares/auth.middleware');
const uploadMiddleware = require('../middlewares/upload.middleware');
const uploadController = require('../controllers/upload.controller');

// Montée sous /galleries/:id dans app.js (voir note d'installation),
// d'où mergeParams: true pour accéder à req.params.id ici.
router.post('/upload', requireAuth, uploadMiddleware, uploadController.uploadPhoto);
router.delete('/photos/:photoId', requireAuth, uploadController.removePhoto);

module.exports = router;