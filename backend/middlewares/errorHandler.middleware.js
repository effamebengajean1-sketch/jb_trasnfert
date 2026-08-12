// Filet de sécurité en dernier recours (erreurs non catchées, ex. crash Multer
// avant d'atteindre un controller). Ne remplace PAS le try/catch de chaque
// controller, qui reste la norme en Phase 1.
function errorHandler(err, req, res, next) {
  console.error(err);

  // Erreurs Multer (taille de fichier dépassée, etc.)
  if (err.name === 'MulterError') {
    return res.status(400).json({ error: `Erreur d'upload : ${err.message}` });
  }

  res.status(err.status || 500).json({ error: err.message || 'Erreur serveur' });
}

module.exports = errorHandler;