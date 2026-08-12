// Controller Public : aucune vérification d'authentification ici (voir
// public.routes.js — c'est le seul fichier de routes sans requireAuth,
// volontairement et documenté pour éviter qu'une future route privée
// s'y glisse par erreur).

const publicService = require('../services/public.service');

/**
 * GET /g/:slug
 * Consultation publique d'une galerie via son lien de partage.
 */
async function getBySlug(req, res) {
  try {
    const galerie = await publicService.recupererParSlug(req.params.slug);

    if (!galerie) {
      return res.status(404).json({ error: 'Galerie introuvable' });
    }

    return res.status(200).json(galerie);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erreur lors de la récupération de la galerie' });
  }
}

module.exports = { getBySlug };