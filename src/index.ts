// src/index.ts
import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});





app.get('/derrick', (_req, res) => {
  res.send('Route de derrick !');
});


export default app;