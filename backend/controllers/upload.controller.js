const galleryService = require('../services/gallery.service');
const uploadService = require('../services/upload.service');
const fs = require('fs').promises;
const path = require('path');

/**
 * POST /galleries/:id/upload
 * Upload d'une photo dans une galerie, réservé au propriétaire.
 */
async function uploadPhoto(req, res) {
  try {
    const galerieId = req.params.id;      // mergeParams: true depuis la route parent
    const fichier = req.file;             // injecté par Multer (upload.middleware)

    if (!fichier) {
      return res.status(400).json({ error: 'Aucun fichier reçu' });
    }

    // Vérifie que la galerie existe
    const galerie = await galleryService.trouverParId(galerieId);
    if (!galerie) {
      return res.status(404).json({ error: 'Galerie introuvable' });
    }

    // Vérifie que l'utilisateur connecté est bien le propriétaire
    if (galerie.utilisateurId !== req.user.id) {
      return res.status(403).json({ error: 'Accès refusé à cette galerie' });
    }

    // Crée l'entrée en base
    const photo = await uploadService.creerPhoto({
      galerieId,
      nomOriginal: fichier.originalname,
      nomFichier: fichier.filename,
      chemin: fichier.path,
      taille: fichier.size,
      typeMime: fichier.mimetype,
    });

    return res.status(201).json(photo);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erreur lors de l\'upload de la photo' });
  }
}

/**
 * DELETE /galleries/:id/photos/:photoId
 * Supprime une photo (fichier sur disque + ligne en base), réservé au propriétaire.
 */
async function removePhoto(req, res) {
  try {
    const galerieId = req.params.id;
    const photoId = req.params.photoId;

    // Vérifie que la galerie existe
    const galerie = await galleryService.trouverParId(galerieId);
    if (!galerie) {
      return res.status(404).json({ error: 'Galerie introuvable' });
    }

    // Vérifie que l'utilisateur connecté est bien le propriétaire
    if (galerie.utilisateurId !== req.user.id) {
      return res.status(403).json({ error: 'Accès refusé à cette galerie' });
    }

    // Récupère la photo et vérifie qu'elle appartient bien à cette galerie
    const photo = await uploadService.trouverParId(photoId);
    if (!photo || photo.galerieId !== galerieId) {
      return res.status(404).json({ error: 'Photo introuvable dans cette galerie' });
    }

    // Supprime le fichier physique sur le disque
    try {
      await fs.unlink(photo.chemin);
    } catch (fsErr) {
      // Si le fichier n'existe déjà plus sur le disque, on continue quand même
      if (fsErr.code !== 'ENOENT') {
        console.error('Erreur suppression fichier:', fsErr);
      }
    }

    // Supprime la ligne en base
    await uploadService.supprimerPhoto(photoId);

    return res.status(204).send();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erreur lors de la suppression de la photo' });
  }
}

// ⚠️  EXPORTE LES DEUX FONCTIONS — c'était le bug
module.exports = { uploadPhoto, removePhoto };