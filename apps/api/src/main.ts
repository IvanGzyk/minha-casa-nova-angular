/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

import { MongoClient } from 'mongodb';

import * as cors from 'cors';

import { json } from 'body-parser';

import { router as authRoute } from './app/routes/auth';
import { router as imoveisRoute } from './app/routes/imoveis';
import { requireJwtToken } from './app/middlewares/jwt';

MongoClient.connect(
  'mongodb://trabalho-final_devcontainer_db_1:27017',
).then((client: MongoClient) => {
  app.locals.db = client.db('app-imobiliarias');
  console.log('    Conectado ao MongoDB.');
}).catch(err => {
  console.error('    Erro ao conectar ao MongoDB', err);
});

const app = express();

app.use(cors());

app.use(json());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.use('/api/imoveis', imoveisRoute);

app.use('/api/auth', authRoute);

// Daqui para baixo, exige token JWT válido no
// cabeçalho HTTP Authorzation ("Bearer [token JWT aqui]"):
app.use(requireJwtToken);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
