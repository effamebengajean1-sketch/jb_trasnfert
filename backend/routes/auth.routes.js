// Déclaration pure des routes Auth : aucune logique métier ici,
// seulement le branchement vers les controllers.

const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;