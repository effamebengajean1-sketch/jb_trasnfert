// Génération de slugs uniques pour les liens de partage publics des
// galeries (ex. /g/a1b2c3d4). Utilise nanoid pour un identifiant court,
// lisible dans une URL, avec une probabilité de collision négligeable.

const { customAlphabet } = require('nanoid');
const prisma = require('./prisma');

// Alphabet sans caractères ambigus (pas de 0/O, 1/l/I) pour éviter les
// erreurs de recopie si un utilisateur tape le lien à la main.
const ALPHABET = '23456789abcdefghjkmnpqrstuvwxyz';
const TAILLE_SLUG = 8;

const genererSlug = customAlphabet(ALPHABET, TAILLE_SLUG);

/**
 * Génère un slug garanti unique en base, avec vérification de collision.
 * La collision est extrêmement improbable vu la taille de l'alphabet et
 * la longueur choisie, mais on vérifie quand même par prudence.
 */
async function genererSlugUnique() {
  let slug;
  let existe = true;

  while (existe) {
    slug = genererSlug();
    const galerieExistante = await prisma.galerie.findUnique({ where: { slug } });
    existe = Boolean(galerieExistante);
  }

  return slug;
}

module.exports = { genererSlugUnique };