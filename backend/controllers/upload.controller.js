const galleryService = require('../services/gallery.service');
const uploadService = require('../services/upload.service');
// J'ai supprimé les imports 'fs' et 'path' qui ne servent plus ici 
// puisque le service s'occupe déjà de la suppression physique du fichier.

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

    // CORRECTION : On passe bien 2 arguments distincts (galerieId et l'objet fichier)
    // comme l'attend le service, et plus un seul gros objet.
    const photo = await uploadService.creerPhoto(galerieId, fichier);

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

    // CORRECTION : On laisse le service gérer la suppression du fichier physique 
    // ET de la ligne en base (il est prévu pour ça et gère les erreurs si le fichier manque)
    await uploadService.supprimerPhoto(photoId);

    return res.status(204).send();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erreur lors de la suppression de la photo' });
  }
}

// Exports des deux fonctions
module.exports = { uploadPhoto, removePhoto };
