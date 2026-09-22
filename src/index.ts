// src/index.ts
import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/derrick', (_req, res) => {
  res.send('Route de derrick !');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

export default app;