// Controller Auth : parse la requête HTTP, appelle le service, traduit
// le résultat en réponse. Réponses JSON brutes (pas d'enveloppe
// { success, data }) — voir le cahier des charges pour le pourquoi.

const authService = require('../services/auth.service');

/**
 * POST /auth/register
 * Crée un compte utilisateur et renvoie directement un token
 * (connexion automatique après inscription, plus fluide pour l'utilisateur).
 */
async function register(req, res) {
  try {
    const { email, motDePasse, nom } = req.body;

    if (!email || !motDePasse || !nom) {
      return res.status(400).json({ error: 'Email, mot de passe et nom sont requis' });
    }

    const utilisateurExistant = await authService.trouverParEmail(email);
    if (utilisateurExistant) {
      return res.status(409).json({ error: 'Un compte existe déjà avec cet email' });
    }

    const utilisateur = await authService.creerUtilisateur({ email, motDePasse, nom });
    const token = authService.genererToken(utilisateur.id);

    // On ne renvoie jamais motDePasseHash dans la réponse
    return res.status(201).json({
      token,
      utilisateur: { id: utilisateur.id, email: utilisateur.email, nom: utilisateur.nom, role: utilisateur.role },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erreur lors de la création du compte' });
  }
}

/**
 * POST /auth/login
 * Vérifie les identifiants et renvoie un token si valides.
 */
async function login(req, res) {
  try {
    const { email, motDePasse } = req.body;

    if (!email || !motDePasse) {
      return res.status(400).json({ error: 'Email et mot de passe requis' });
    }

    const utilisateur = await authService.trouverParEmail(email);
    if (!utilisateur) {
      // Message volontairement vague (ne pas révéler si l'email existe ou non)
      return res.status(401).json({ error: 'Identifiants invalides' });
    }

    const motDePasseValide = await authService.verifierMotDePasse(motDePasse, utilisateur.motDePasseHash);
    if (!motDePasseValide) {
      return res.status(401).json({ error: 'Identifiants invalides' });
    }

    const token = authService.genererToken(utilisateur.id);

    return res.status(200).json({
      token,
      utilisateur: { id: utilisateur.id, email: utilisateur.email, nom: utilisateur.nom, role: utilisateur.role },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erreur lors de la connexion' });
  }
}

module.exports = { register, login };