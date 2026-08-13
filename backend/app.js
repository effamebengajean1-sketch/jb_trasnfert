const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler.middleware');

const app = express();

// CORS : autorise localhost (dev) et Vercel (prod)
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://jb-transfert.vercel.app',
  'https://jb-trasnfert-six.vercel.app',        // ← ton frontend actuel
  'https://jb-trasnfert-dny7-three.vercel.app', // ← l'ancien (au cas où)
];

// Regex pour accepter automatiquement tous les futurs deploys Vercel
const allowedPatterns = [
  /^https:\/\/jb-trasnfert.*\.vercel\.app$/,
  /^https:\/\/jb-transfert.*\.vercel\.app$/,
];

app.use(cors({
  origin: (origin, callback) => {
    // Requêtes serveur-à-serveur (pas d'origin)
    if (!origin) return callback(null, true);

    // Vérifie string exacte
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    // Vérifie regex
    const matchesPattern = allowedPatterns.some(pattern => pattern.test(origin));
    if (matchesPattern) {
      return callback(null, true);
    }

    // Log pour debug
    console.error('CORS rejeté pour:', origin);
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
}));

// Middlewares globaux
app.use(express.json());

// Healthcheck simple
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Montage des routes
app.use('/auth', require('./routes/auth.routes'));
app.use('/galleries', require('./routes/gallery.routes'));
app.use('/galleries/:id', require('./routes/upload.routes'));
app.use('/g', require('./routes/public.routes'));
app.use('/users', require('./routes/user.routes'));
const adminRoutes = require('./routes/admin.routes');
app.use('/admin', adminRoutes);

// Sert les fichiers uploadés statiquement
const env = require('./config/env');
app.use('/uploads', express.static(env.uploadDir));

// Route non trouvée (404)
app.use((req, res) => {
  res.status(404).json({ error: 'Route introuvable' });
});

// Middleware d'erreur global
app.use(errorHandler);

module.exports = app;
