const express = require('express');
const routes = require('./routes');
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

/**
 * Metodos http
 * get: buscar uma informação do backend
 * post: criar uma informação no backend
 * put: editar uma informação no backend
 * delete: deletar uma informação no backend
 */

/**
 * tipos de parâmetros
 * Query: parametros nomeados enviados na roda apos "?"
 * Route: parametros utilizados para identificar recursos
 * Body: corpo de requisição, para criar ou alterar recursos
 * */ 

 app.listen(3333);