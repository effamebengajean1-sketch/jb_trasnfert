const express = require('express');
const router = express.Router();
const requireAuth = require('../middlewares/auth.middleware');
const { updateProfile, changePassword } = require('../controllers/user.controller');

router.patch('/me', requireAuth, updateProfile);
router.patch('/me/password', requireAuth, changePassword);

module.exports = router;
