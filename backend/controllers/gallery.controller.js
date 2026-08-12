// Controller Galerie : orchestration HTTP. Vérifie systématiquement que
// la galerie ciblée appartient bien à l'utilisateur authentifié
// (req.user, injecté par requireAuth) avant toute lecture/écriture.

const galleryService = require('../services/gallery.service');

/**
 * POST /galleries
 * Crée une nouvelle galerie pour l'utilisateur connecté.
 */
async function create(req, res) {
  try {
    const { titre } = req.body;

    if (!titre || titre.trim().length === 0) {
      return res.status(400).json({ error: 'Le titre de la galerie est requis' });
    }

    const galerie = await galleryService.creerGalerie(req.user.id, titre.trim());
    return res.status(201).json(galerie);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erreur lors de la création de la galerie' });
  }
}

/**
 * GET /galleries
 * Liste les galeries de l'utilisateur connecté.
 */
async function list(req, res) {
  try {
    const galeries = await galleryService.listerGaleriesUtilisateur(req.user.id);
    return res.status(200).json(galeries);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erreur lors de la récupération des galeries' });
  }
}

/**
 * GET /galleries/:id
 * Détail d'une galerie (avec ses photos), réservé à son propriétaire.
 */
async function getById(req, res) {
  try {
    const galerie = await galleryService.trouverParId(req.params.id);

    if (!galerie) {
      return res.status(404).json({ error: 'Galerie introuvable' });
    }

    if (galerie.utilisateurId !== req.user.id) {
      return res.status(403).json({ error: 'Accès refusé à cette galerie' });
    }

    return res.status(200).json(galerie);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erreur lors de la récupération de la galerie' });
  }
}

/**
 * PATCH /galleries/:id
 * Renomme une galerie, réservé à son propriétaire.
 */
async function update(req, res) {
  try {
    const { titre } = req.body;

    if (!titre || titre.trim().length === 0) {
      return res.status(400).json({ error: 'Le titre de la galerie est requis' });
    }

    const galerie = await galleryService.trouverParId(req.params.id);
    if (!galerie) {
      return res.status(404).json({ error: 'Galerie introuvable' });
    }
    if (galerie.utilisateurId !== req.user.id) {
      return res.status(403).json({ error: 'Accès refusé à cette galerie' });
    }

    const galerieMiseAJour = await galleryService.renommerGalerie(req.params.id, titre.trim());
    return res.status(200).json(galerieMiseAJour);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erreur lors de la mise à jour de la galerie' });
  }
}

/**
 * DELETE /galleries/:id
 * Supprime une galerie, réservé à son propriétaire.
 */
async function remove(req, res) {
  try {
    const galerie = await galleryService.trouverParId(req.params.id);
    if (!galerie) {
      return res.status(404).json({ error: 'Galerie introuvable' });
    }
    if (galerie.utilisateurId !== req.user.id) {
      return res.status(403).json({ error: 'Accès refusé à cette galerie' });
    }

    await galleryService.supprimerGalerie(req.params.id);
    return res.status(204).send();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erreur lors de la suppression de la galerie' });
  }
}

module.exports = { create, list, getById, update, remove };