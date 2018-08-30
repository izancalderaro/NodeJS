const restify = require('restify'),
    restify_errors = require('restify-errors');




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

server.get('/', (req, res, next) => {
    knex('cliente').then((dados) => {
        res.send(dados);
    }, next);

});


// module.exports = app;