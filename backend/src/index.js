const express = require("express");
const cors = require('cors');
const app = express();
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / Recursos 
 */

 /**
  * Metodos HTTP:
  * 
  * GET: Buscar/Listar informaçóes do backend
  * POST: Cadastra uma informação no backend
  * PUT: Altera uma informação no backend
  * DELETE: Deleta uma informação no backend
  */

  /**
   * Tipos de parâmetros
   * 
   * Query Params: Parametros nomeados enviados na rota após o "?" (Filtros, paginação)
   * Route Params: Parametros utilizados para identificar recursos
   * Request Body: Corpo da requisição, criado para criar o alterar recursos
   */

   /**
    * Banco de Dados
    * 
    * SQL: MySQL, SQLite
    * NoSQL:MongoDB
    */

    /**
     * Driver: SELECT * FROM user
     * Query builder: table('users').select('*').where()
     */



app.listen(3333);