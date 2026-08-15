// Configuration Multer pour l'upload de photos.
//
// Le fichier n'est plus écrit sur le disque : il est conservé en mémoire
// (req.file.buffer) puis transmis directement à Cloudinary par le service.
// Le disque de Render est éphémère, les fichiers y disparaissent à chaque
// redémarrage ou redéploiement.
//
// AUCUNE transformation d'image ici (pas de resize/compression) : le
// fichier reste exactement tel que déposé.

const multer = require('multer');
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

function filtreFormat(req, file, cb) {
  if (FORMATS_ACCEPTES.includes(file.mimetype)) {
    cb(null, true);
    return;
  }

  const err = new Error(
    `Format non supporté : ${file.mimetype}. Formats acceptés : JPG, PNG, GIF, WebP, HEIC.`
  );
  err.status = 400;
  cb(err);
}

const upload = multer({
  // Le fichier reste en RAM, disponible dans req.file.buffer
  storage: multer.memoryStorage(),
  fileFilter: filtreFormat,
  limits: {
    fileSize: (env.maxFileSizeMb || 10) * 1024 * 1024,
  },
});

// Upload d'un seul fichier, le champ du formulaire devant s'appeler "photo".
module.exports = upload.single('photo');
