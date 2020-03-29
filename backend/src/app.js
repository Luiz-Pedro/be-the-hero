const express = require('express');
const cors = require('cors');
const { errors }= require('celebrate')
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
// o app.listen(3333) foi mudado para o arq server.js para a realizacao de testes sem a necessidade de levantar o servidor. 
// em casos de rodar sem testes, substituir a ultima linha por app.listen(3333).
// esse arq chamava index.js. trocar no npm start do package.json o script para nodemon src/index.js e renomear esse arq para index.js
// caso somente se nao for usar os testes