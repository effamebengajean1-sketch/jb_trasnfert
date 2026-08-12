const bcrypt = require('bcrypt');
const prisma = require('../lib/prisma');

async function updateProfile(req, res, next) {
  try {
    const userId = req.user.id;
    const { nom, email } = req.body;

    if (!nom?.trim() || !email?.trim()) {
      return res.status(400).json({ error: 'Nom et email requis' });
    }

    const existing = await prisma.utilisateur.findFirst({
      where: { email: email.trim(), NOT: { id: userId } }
    });
    if (existing) {
      return res.status(409).json({ error: 'Cet email est déjà utilisé' });
    }

    const updated = await prisma.utilisateur.update({
      where: { id: userId },
      data: { nom: nom.trim(), email: email.trim() },
      select: { id: true, nom: true, email: true, dateCreation: true }
    });

    res.json(updated);
  } catch (err) {
    next(err);
  }
}

async function changePassword(req, res, next) {
  try {
    const userId = req.user.id;
    const { ancienMotDePasse, nouveauMotDePasse } = req.body;

    if (!ancienMotDePasse || !nouveauMotDePasse) {
      return res.status(400).json({ error: 'Tous les champs sont requis' });
    }
    if (nouveauMotDePasse.length < 6) {
      return res.status(400).json({ error: 'Le mot de passe doit faire au moins 6 caractères' });
    }

    const user = await prisma.utilisateur.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur introuvable' });
    }

    const valid = await bcrypt.compare(ancienMotDePasse, user.motDePasseHash);
    if (!valid) {
      return res.status(400).json({ error: 'Mot de passe actuel incorrect' });
    }

    const hash = await bcrypt.hash(nouveauMotDePasse, 10);
    await prisma.utilisateur.update({ where: { id: userId }, data: { motDePasseHash: hash } });

    res.json({ success: true });
  } catch (err) {
    next(err);
  }
}

module.exports = { updateProfile, changePassword };