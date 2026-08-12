// Déclaration pure des routes Galerie : toutes protégées par requireAuth,
// aucune logique métier ici.

const express = require('express');
const router = express.Router();
const requireAuth = require('../middlewares/auth.middleware');
const galleryController = require('../controllers/gallery.controller');

router.post('/', requireAuth, galleryController.create);
router.get('/', requireAuth, galleryController.list);
router.get('/:id', requireAuth, galleryController.getById);
router.patch('/:id', requireAuth, galleryController.update);
router.delete('/:id', requireAuth, galleryController.remove);

module.exports = router;