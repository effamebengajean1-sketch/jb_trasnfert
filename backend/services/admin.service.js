const prisma = require('../lib/prisma');
const fs = require('fs').promises;

async function getStats() {
  const [usersCount, galleriesCount, photosCount, photos] = await Promise.all([
    prisma.utilisateur.count(),
    prisma.galerie.count(),
    prisma.photo.count(),
    prisma.photo.findMany({ select: { tailleOctets: true } }),
  ]);

  const storageUsed = photos.reduce((sum, p) => sum + (p.tailleOctets || 0), 0);

  return { users: usersCount, galleries: galleriesCount, photos: photosCount, storageUsed };
}

async function getUsers({ page = 1, limit = 20 } = {}) {
  const skip = (page - 1) * limit;
  const [users, total] = await Promise.all([
    prisma.utilisateur.findMany({
      skip,
      take: limit,
      orderBy: { dateCreation: 'desc' },
      select: {
        id: true,
        email: true,
        nom: true,
        role: true,
        dateCreation: true,
        _count: { select: { galeries: true } },
      },
    }),
    prisma.utilisateur.count(),
  ]);
  return { users, total, page, totalPages: Math.ceil(total / limit) };
}

async function getGalleries({ page = 1, limit = 20 } = {}) {
  const skip = (page - 1) * limit;
  const [galleries, total] = await Promise.all([
    prisma.galerie.findMany({
      skip,
      take: limit,
      orderBy: { dateCreation: 'desc' },
      include: {
        utilisateur: { select: { id: true, nom: true, email: true } },
        _count: { select: { photos: true } },
      },
    }),
    prisma.galerie.count(),
  ]);
  return { galleries, total, page, totalPages: Math.ceil(total / limit) };
}

async function deleteUser(userId) {
  const user = await prisma.utilisateur.findUnique({
    where: { id: userId },
    include: { galeries: { include: { photos: true } } },
  });

  if (!user) throw new Error('Utilisateur introuvable');

  // Supprime tous les fichiers physiques (galeries + photos)
  for (const galerie of user.galeries) {
    for (const photo of galerie.photos) {
      await fs.unlink(photo.cheminFichier).catch(() => {});
    }
  }

  // La BDD supprime en cascade les galeries et photos liées
  await prisma.utilisateur.delete({ where: { id: userId } });
  return { deleted: true };
}

async function deleteGallery(galleryId) {
  const galerie = await prisma.galerie.findUnique({
    where: { id: galleryId },
    include: { photos: true },
  });

  if (!galerie) throw new Error('Galerie introuvable');

  for (const photo of galerie.photos) {
    await fs.unlink(photo.cheminFichier).catch(() => {});
  }

  await prisma.galerie.delete({ where: { id: galleryId } });
  return { deleted: true };
}

module.exports = { getStats, getUsers, getGalleries, deleteUser, deleteGallery };
