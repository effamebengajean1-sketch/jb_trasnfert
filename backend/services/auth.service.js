// Service Auth : logique métier pure, aucune connaissance de req/res.
// Gère le hash des mots de passe et la génération/vérification des tokens.

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../lib/prisma');
const env = require('../config/env');

const SALT_ROUNDS = 10;

/**
 * Hash un mot de passe en clair avant stockage en base.
 * Ne jamais stocker un mot de passe en clair.
 */
async function hasherMotDePasse(motDePasse) {
  return bcrypt.hash(motDePasse, SALT_ROUNDS);
}

/**
 * Compare un mot de passe en clair (saisi au login) avec le hash stocké.
 * Retourne true/false, ne lève jamais d'erreur en cas de non-correspondance.
 */
async function verifierMotDePasse(motDePasse, hash) {
  return bcrypt.compare(motDePasse, hash);
}

/**
 * Génère un token JWT signé pour un utilisateur donné.
 * Le token expire après 7 jours (à ajuster selon les besoins de sécurité).
 */
function genererToken(utilisateurId) {
  return jwt.sign({ utilisateurId }, env.jwtSecret, { expiresIn: '7d' });
}

/**
 * Vérifie et décode un token JWT. Lève une erreur si invalide/expiré
 * (à catcher dans le middleware d'authentification).
 */
function verifierToken(token) {
  return jwt.verify(token, env.jwtSecret);
}

/**
 * Crée un nouvel utilisateur en base après avoir hashé son mot de passe.
 * Ne fait AUCUNE validation de format ici (email valide, etc.) — cette
 * responsabilité reste au controller, qui parle le langage HTTP.
 */
async function creerUtilisateur({ email, motDePasse, nom }) {
  const motDePasseHash = await hasherMotDePasse(motDePasse);
  return prisma.utilisateur.create({
    data: { email, motDePasseHash, nom },
  });
}

/**
 * Recherche un utilisateur par email. Retourne null si non trouvé —
 * c'est au controller de décider comment réagir (404, 401, etc.).
 */
async function trouverParEmail(email) {
  return prisma.utilisateur.findUnique({ where: { email } });
}

/**
 * Recherche un utilisateur par id (utilisé par le middleware auth pour
 * recharger l'utilisateur à partir du token décodé).
 */
async function trouverParId(id) {
  return prisma.utilisateur.findUnique({ where: { id } });
}

module.exports = {
  hasherMotDePasse,
  verifierMotDePasse,
  genererToken,
  verifierToken,
  creerUtilisateur,
  trouverParEmail,
  trouverParId,
};