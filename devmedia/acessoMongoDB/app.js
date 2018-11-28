let mongoCliente = require('mongodb').MongoClient;
let servidor = 'mongodb://localhost:27017/jaspion';
let test = require('assert');

mongoCliente.connect(servidor, { useNewUrlParser: true }, function (erro, bancodados) {
    if (erro) throw erro;

    let usuario = { login: 'Maximos', senha: '123'};
    
    let db = bancodados.db('jaspion');
    let colecao = db.collection('clientes');


    colecao.insertOne(usuario, function (erro, dados) {
        console.log('Documento inserido');
    });

    bancodados.close();
});