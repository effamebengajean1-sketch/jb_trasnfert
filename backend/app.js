const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const errorHandler = require('./middlewares/errorHandler.middleware');
const env = require('./config/env');

const app = express();

// ========== CORS ==========
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://jb-transfert.vercel.app',
  'https://jb-trasnfert-six.vercel.app', // (Attention, petite faute de frappe ici "trasnfert" au lieu de "transfert", mais je laisse au cas où c'est ton vrai lien Vercel)
  'https://jb-trasnfert-dny7-three.vercel.app',
];

const allowedPatterns = [
  /^https:\/\/jb-trasnfert.*\.vercel\.app$/,
  /^https:\/\/jb-transfert.*\.vercel\.app$/,
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    if (allowedPatterns.some(p => p.test(origin))) return callback(null, true);
    console.error('CORS rejeté pour:', origin);
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
}));

// ========== CRÉATION DOSSIER UPLOADS (crucial sur Render) ==========
const uploadDir = path.resolve(env.uploadDir || 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log('✅ Dossier uploads créé:', uploadDir);
}

// ========== ROUTES AVEC MULTER (AVANT express.json !) ==========
// Multer doit parser le body avant que express.json() ne touche quoi que ce soit
app.use('/galleries/:id', require('./routes/upload.routes'));

// ========== PUIS express.json() pour les routes classiques ==========
app.use(express.json());

// ========== ROUTES JSON ==========
app.use('/auth', require('./routes/auth.routes'));
app.use('/galleries', require('./routes/gallery.routes'));
app.use('/g', require('./routes/public.routes'));
app.use('/users', require('./routes/user.routes'));
const adminRoutes = require('./routes/admin.routes');
app.use('/admin', adminRoutes);

// ========== FICHIERS STATIQUES ==========
// ✅ C'EST ICI QUE TES PHOTOS SONT RENDUES ACCESSIBLES AU FRONTEND !
// Quand le frontend demande https://jb-transfert-api.onrender.com/uploads/mon-image.jpg,
// Express va chercher le fichier "mon-image.jpg" dans le dossier "uploadDir".
app.use('/uploads', express.static(uploadDir));

// Healthcheck
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uploadDir });
});

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Route introuvable' });
});

// Erreur global
app.use(errorHandler);

module.exports = app;
