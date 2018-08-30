const restify = require('restify'),
    restify_errors = require('restify-errors'),
    express = require('express'),
    consign = require('consign');

var app = express();



//servidor web ===============================

const server = restify.createServer({
    name: 'myapp',
    version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


server.listen(3000, function () {
    console.log('%s listening at %s', server.name, server.url);
});

consign({cwd: 'api'})
    .then('routes')
    .then('db')
    .into(app);


//servidor Banco de Dados ===============================

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'jaspion',
        database: 'demo'
    }
});

//Rotas

// server.get('/', (req, res, next) =>{
   
//     knex('rest')
//     .select()
   
//     // res.send(req.params);
//     // return next();
// });