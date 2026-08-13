const fs = require('fs/promises');
const path = require('path');
const prisma = require('../lib/prisma');
const env = require('../config/env');

/**
 * Enregistre une photo en base à partir des infos du fichier Multer
 * (req.file) et de l'id de la galerie cible.
 */
async function creerPhoto(galerieId, fichierMulter) {
  return prisma.photo.create({
    data: {
      nomFichier: fichierMulter.originalname,
      cheminFichier: fichierMulter.filename, // nom unique généré par Multer, pas le chemin absolu
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
 * Supprime une photo : la ligne en base ET le fichier physique sur disque.
 * Si le fichier physique est déjà absent (incohérence), on ne fait pas
 * échouer l'opération pour autant — la priorité est de nettoyer la base.
 */
async function supprimerPhoto(id) {
  const photo = await prisma.photo.findUnique({ where: { id } });
  if (!photo) return null;

  const cheminComplet = path.join(env.uploadDir, photo.cheminFichier);
  try {
    await fs.unlink(cheminComplet);
  } catch (err) {
    console.error(`Fichier physique introuvable lors de la suppression : ${cheminComplet}`);
  }

  return prisma.photo.delete({ where: { id } });
}

module.exports = {
  creerPhoto,
  listerPhotosGalerie,
  trouverParId,
  supprimerPhoto,
};
