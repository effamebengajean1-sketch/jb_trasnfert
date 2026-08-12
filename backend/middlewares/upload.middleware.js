// Configuration Multer pour l'upload de photos. Rejette avant même
// d'atteindre le controller si le format ou la taille ne conviennent pas.
// AUCUNE transformation d'image ici (pas de resize/compression) — le
// fichier reste exactement tel que déposé, conformément au cahier des
// charges Phase 1.

const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const env = require('../config/env');

// Formats acceptés (cahier des charges : JPG, PNG, GIF, WebP, HEIC)
const FORMATS_ACCEPTES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/heic',
  'image/heif', // HEIC est parfois envoyé avec ce type MIME selon le navigateur/OS
];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, env.uploadDir);
  },
  filename: (req, file, cb) => {
    // Nom de fichier unique pour éviter toute collision, tout en gardant
    // l'extension d'origine (utile pour le téléchargement côté visiteur).
    const extension = path.extname(file.originalname);
    const nomUnique = `${Date.now()}-${crypto.randomUUID()}${extension}`;
    cb(null, nomUnique);
  },
});

function filtreFormat(req, file, cb) {
  if (FORMATS_ACCEPTES.includes(file.mimetype)) {
    cb(null, true);
  } else {
    // Cette erreur est catchée par errorHandler.middleware.js (err.name === 'MulterError'
    // ne s'applique pas ici, donc on passe par un Error standard avec un status custom)
    const err = new Error(`Format non supporté : ${file.mimetype}. Formats acceptés : JPG, PNG, GIF, WebP, HEIC.`);
    err.status = 400;
    cb(err);
  }
}

const upload = multer({
  storage,
  fileFilter: filtreFormat,
  limits: {
    fileSize: env.maxFileSizeMb * 1024 * 1024,
  },
});

// Export du middleware prêt à l'emploi pour un upload d'un seul fichier,
// le champ du formulaire devant s'appeler "photo".
module.exports = upload.single('photo');