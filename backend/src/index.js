/**
 * Metodos http
 * GET: Buscar informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parametros
 * Query: parametros nomeados enviados na rota após "?" (filtros, paginação)
 * Route: parametros usados para identificar recursos
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * Bancos de dados
  * SQL: mySql, postgre, oracle, SQLite
  * NoSQL: mongoDB, CouchDB
  */
/**
 * driver: SELECT * FROM users;
 * Query Builder: table('users').select('*')
 */

const express = require('express');
const cors = require('cors');
const routes = require('./routes');//importando as rotas
//precisa do './' para indicar que routes é um arquivo e não um módulo, como o express 

const app = express();

app.use(cors());
app.use(express.json());//diz ao express que usaremos json para as requisições
app.use(routes);

app.listen(3333);
