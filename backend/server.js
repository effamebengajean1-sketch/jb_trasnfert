const app = require('./app');
const env = require('./config/env');

app.listen(env.port, () => {
  console.log(`Serveur backend démarré sur http://localhost:${env.port}`);
});