const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler.middleware');

const app = express();

// CORS : autorise localhost (dev) et Vercel (prod)
const allowedOrigins = [
  'http://localhost:3000',
  'https://jb-transfert.vercel.app',
];

app.use(cors({
  origin: (origin, callback) => {
    // origin peut être undefined pour les requêtes serveur-à-serveur
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
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
