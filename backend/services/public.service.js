// Service Public : lecture seule, aucune écriture possible ici.
// Ce module est le seul point d'accès aux données pour un visiteur non
// authentifié (via le lien de partage /g/:slug) — voir public.routes.js
// pour la séparation stricte avec les routes protégées.

const prisma = require('../lib/prisma');

/**
 * Récupère une galerie et ses photos à partir du slug public.
 * Retourne null si le slug n'existe pas — au controller de renvoyer 404.
 * Ne renvoie JAMAIS utilisateurId ni aucune info sur le propriétaire :
 * un visiteur ne doit pas savoir qui a créé la galerie au-delà de ce qui
 * est explicitement affiché.
 */
async function recupererParSlug(slug) {
  const galerie = await prisma.galerie.findUnique({
    where: { slug },
    select: {
      id: true,
      titre: true,
      dateCreation: true,
      photos: {
        select: {
          id: true,
          nomFichier: true,
          cheminFichier: true,
          formatMime: true,
          tailleOctets: true,
          dateUpload: true,
        },
        orderBy: { dateUpload: 'asc' },
      },
      // utilisateurId volontairement exclu de la sélection
    },
  });

  return galerie;
}

module.exports = { recupererParSlug };