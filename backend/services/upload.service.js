// Service Upload : envoie le fichier reçu en mémoire vers Cloudinary,
// puis enregistre l'URL renvoyée en base.
//
// cheminFichier contient désormais l'URL HTTPS complète de Cloudinary,
// et non plus un nom de fichier local.

const prisma = require('../lib/prisma');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

/**
 * Envoie un buffer vers Cloudinary et résout avec le résultat de l'upload.
 */
function envoyerVersCloudinary(buffer) {
  return new Promise((resolve, reject) => {
    const flux = cloudinary.uploader.upload_stream(
      {
        folder: 'jb-transfert',
        resource_type: 'image',
      },
      (erreur, resultat) => {
        if (erreur) {
          reject(erreur);
          return;
        }

        resolve(resultat);
      }
    );

    flux.end(buffer);
  });
}

/**
 * Enregistre une photo : upload Cloudinary puis création en base.
 */
async function creerPhoto(galerieId, fichierMulter) {
  const resultat = await envoyerVersCloudinary(fichierMulter.buffer);

  return prisma.photo.create({
    data: {
      nomFichier: fichierMulter.originalname,
      cheminFichier: resultat.secure_url,
      cloudinaryId: resultat.public_id,
      tailleOctets: fichierMulter.size,
      formatMime: fichierMulter.mimetype,
      galerieId,
    },
  });
}

/**
 * Liste les photos d'une galerie (utilisé aussi par le module public,
 * en lecture seule, pour la page de consultation par slug).
 */
async function listerPhotosGalerie(galerieId) {
  return prisma.photo.findMany({
    where: { galerieId },
    orderBy: { dateUpload: 'asc' },
  });
}

/**
 * Récupère une photo par id, utile pour vérifier son appartenance avant
 * suppression ou téléchargement.
 */
async function trouverParId(id) {
  return prisma.photo.findUnique({ where: { id } });
}

/**
 * Supprime une photo : le fichier sur Cloudinary ET la ligne en base.
 * Si la suppression Cloudinary échoue, on nettoie quand même la base.
 */
async function supprimerPhoto(id) {
  const photo = await prisma.photo.findUnique({ where: { id } });

  if (!photo) {
    return null;
  }

  if (photo.cloudinaryId) {
    try {
      await cloudinary.uploader.destroy(photo.cloudinaryId);
    } catch (err) {
      console.error(
        `Suppression Cloudinary impossible pour ${photo.cloudinaryId} : ${err.message}`
      );
    }
  }

  return prisma.photo.delete({ where: { id } });
}

module.exports = {
  creerPhoto,
  listerPhotosGalerie,
  trouverParId,
  supprimerPhoto,
};
