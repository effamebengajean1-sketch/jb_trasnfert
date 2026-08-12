require('dotenv').config();

const REQUIRED_VARS = ['DATABASE_URL', 'JWT_SECRET', 'PORT', 'UPLOAD_DIR', 'MAX_FILE_SIZE_MB'];

function validateEnv() {
  const missing = REQUIRED_VARS.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(
      `Variables d'environnement manquantes : ${missing.join(', ')}. ` +
      `Vérifie ton fichier .env (voir .env.example).`
    );
  }
}

validateEnv();

module.exports = {
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  port: parseInt(process.env.PORT, 10),
  uploadDir: process.env.UPLOAD_DIR,
  maxFileSizeMb: parseInt(process.env.MAX_FILE_SIZE_MB, 10),
};