let mongo = require('mongodb').MongoClient;

let servidor = 'mongodb://localhost:27017/jaspion';

mongo.connect(servidor, { useNewUrlParser: true }, function (erro, db) {

    (erro) ? console.log('ERRO DE CONEXÃO ' + erro) : console.log('CONEXÃO ESTABELECIDA');
    db.close();
});


