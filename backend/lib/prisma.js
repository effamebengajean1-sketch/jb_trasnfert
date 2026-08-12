const { PrismaClient } = require('./generated/prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const env = require('../config/env');

// Prisma 7 impose un driver adapter explicite pour se connecter au runtime
// (l'URL dans prisma.config.ts ne sert qu'à la CLI : migrate, studio, generate).
const adapter = new PrismaPg({ connectionString: env.databaseUrl });

// Singleton pour éviter d'épuiser les connexions en développement
// (nodemon recharge le module à chaque changement de fichier).
const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

module.exports = prisma;