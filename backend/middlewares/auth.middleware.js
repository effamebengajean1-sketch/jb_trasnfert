// Middleware requireAuth : vérifie le token JWT présent dans le header
// Authorization, charge l'utilisateur correspondant, et l'injecte dans
// req.user. Appliqué explicitement route par route (jamais globalement),
// pour garder bien visible quelles routes sont protégées.

const authService = require('../services/auth.service');

async function requireAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Token manquant' });
    }

    const token = authHeader.split(' ')[1];

    let payload;
    try {
      payload = authService.verifierToken(token);
    } catch (err) {
      return res.status(401).json({ error: 'Token invalide ou expiré' });
    }

    const utilisateur = await authService.trouverParId(payload.utilisateurId);
    if (!utilisateur) {
      return res.status(401).json({ error: 'Utilisateur introuvable' });
    }

    // Injecté pour être utilisé par les controllers suivants
    // (ex. vérifier qu'une galerie appartient bien à req.user.id)
    req.user = utilisateur;
    next();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erreur d\'authentification' });
  }
}

module.exports = requireAuth;