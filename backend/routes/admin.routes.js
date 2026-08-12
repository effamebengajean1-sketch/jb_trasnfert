const express = require('express');
const router = express.Router();
const requireAuth = require('../middlewares/auth.middleware');
const requireAdmin = require('../middlewares/admin.middleware');
const adminController = require('../controllers/admin.controller');

router.get('/stats', requireAuth, requireAdmin, adminController.stats);
router.get('/users', requireAuth, requireAdmin, adminController.users);
router.delete('/users/:id', requireAuth, requireAdmin, adminController.removeUser);
router.get('/galleries', requireAuth, requireAdmin, adminController.galleries);
router.delete('/galleries/:id', requireAuth, requireAdmin, adminController.removeGallery);

module.exports = router;