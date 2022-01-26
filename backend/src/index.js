const express = require('express');  //importar algo para o node
const cors = require('cors')
const routes = require('./routes'); //importar rotas do arquivo routes.js

const app = express(); //armazena a aplicação

app.use(cors())
app.use(express.json()); // tem que vir antes das rotas | utilizado para converter o JSON no Insomnia em js
app.use(routes);

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

/**Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) ex=>  users?nome=Nádia
 * Route Parans: Parâmetros utilizados para identificar recursos  ex => nomeRota/1
 * Request Body: Corpo da requisição, utilizado para acessar
 * 
 * o Corpo de uma requisição dentro de uma API é enviado em formato JSON
 * 
 * ------------NODEMON => pacote instalado via terminal para evitar a inicialização do node toda hora.
 * nodemon -D => cria uma dependência de desenvolvimento. Só será utilizado enquanto estiver desenvolvendo.
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL ...
 * NoSQL: MongoDb, CouchDB, etc
 */

/**Driver: SELECT * FROM users 
 * Query Builder: table('users').select('*').where()
*/



app.listen(3333); //ouvir nesta porta 