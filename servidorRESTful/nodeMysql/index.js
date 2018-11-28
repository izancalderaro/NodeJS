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




server.listen(8080, function () {
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


server.get('/*', restify.plugins.serveStatic({
    directory: './dist',
    file: ''
}));



server.get('/read', (req, res, next) => {

    
    //  res.setHeader("Access-Control-Allow-Origin: http://localhost:4200");
    

    // knex('rest').then((dados) => {
    knex.select().from('rest').then((dados) => {
        res.json(dados);
    }, next);

});

server.post('/create', (req, res, next) => {

    knex('rest')
        .insert(req.body)
        .then((dados) => {
            (dados) ? res.send(dados) : res.send(new restify_errors.BadRequestError('Falha na criação do registro'));
        }, next);

});

server.get('/show/:id', (req, res, next) => {

    const { id } = req.params;

    knex('rest')
        .where('id', id)
        .first()
        .then((dados) => {
            (dados) ? res.send(dados) : res.send(new restify_errors.BadRequestError('Nenhum registro'));
        }, next);

});

server.put('/update/:id', (req, res, next) => {

    const { id } = req.params;

    knex('rest')
        .where('id', id)
        .update(req.body)
        .then((dados) => {
            (dados) ? res.send('Registro atualizado') : res.send(new restify_errors.BadRequestError('Nada atualizado'));
        }, next);

});

server.del('/delete/:id', (req, res, next) => {

    const { id } = req.params;

    knex('rest')
        .where('id', id)
        .delete()
        .then((dados) => {
            (dados) ? res.send('Registro removido') : res.send(new restify_errors.BadRequestError('Nada removido'));
        }, next);

});


// module.exports = app;