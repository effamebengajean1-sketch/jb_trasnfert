const adminService = require('../services/admin.service');

async function stats(req, res) {
  try {
    const data = await adminService.getStats();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur stats admin' });
  }
}

async function users(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const data = await adminService.getUsers({ page, limit });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur liste utilisateurs' });
  }
}

async function galleries(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const data = await adminService.getGalleries({ page, limit });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur liste galeries' });
  }
}

async function removeUser(req, res) {
  try {
    await adminService.deleteUser(req.params.id);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'Erreur suppression utilisateur' });
  }
}

async function removeGallery(req, res) {
  try {
    await adminService.deleteGallery(req.params.id);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'Erreur suppression galerie' });
  }
}

module.exports = { stats, users, galleries, removeUser, removeGallery };
