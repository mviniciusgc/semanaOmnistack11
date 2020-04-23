const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
app.use(cors);
app.use(express.json());
app.use(routes);

/**
 * Tiposd e parâmetros:
 * 
 * Query: Parâmetros nomeados enviados na rota apos "?"
 * 
 * Route Params: Parâmetros utilizados para identificar recursos
 * 
 * Banco de dados utilizar o Knex.js
 */



app.listen(3333);