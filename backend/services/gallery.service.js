// Service Galerie : logique métier + accès Prisma. Aucune connaissance
// de req/res — reste testable indépendamment d'Express.

const prisma = require('../lib/prisma');
const { genererSlugUnique } = require('../lib/slug');

/**
 * Crée une nouvelle galerie pour un utilisateur donné, avec un slug
 * unique généré automatiquement.
 */
async function creerGalerie(utilisateurId, titre) {
  const slug = await genererSlugUnique();
  return prisma.galerie.create({
    data: { titre, slug, utilisateurId },
  });
}

/**
 * Liste toutes les galeries d'un utilisateur, avec le nombre de photos
 * pour l'affichage en carte (évite de charger toutes les photos ici).
 */
async function listerGaleriesUtilisateur(utilisateurId) {
  return prisma.galerie.findMany({
    where: { utilisateurId },
    orderBy: { dateCreation: 'desc' },
    include: { _count: { select: { photos: true } } },
  });
}

/**
 * Récupère une galerie par id, avec ses photos.
 * Retourne null si non trouvée (au controller de décider : 404 ou autre).
 */
async function trouverParId(id) {
  return prisma.galerie.findUnique({
    where: { id },
    include: { photos: true },
  });
}

/**
 * Met à jour le titre d'une galerie. Ne touche jamais au slug une fois
 * créé (un lien déjà partagé ne doit pas changer silencieusement).
 */
async function renommerGalerie(id, titre) {
  return prisma.galerie.update({
    where: { id },
    data: { titre },
  });
}

/**
 * Supprime une galerie. Les photos associées sont supprimées en cascade
 * au niveau du schéma Prisma (onDelete: Cascade) — mais PAS les fichiers
 * physiques sur disque, qu'il faut nettoyer séparément (voir upload.service).
 */
async function supprimerGalerie(id) {
  return prisma.galerie.delete({ where: { id } });
}

module.exports = {
  creerGalerie,
  listerGaleriesUtilisateur,
  trouverParId,
  renommerGalerie,
  supprimerGalerie,
};