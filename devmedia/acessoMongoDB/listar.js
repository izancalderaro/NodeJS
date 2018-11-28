let mongoCliente = require('mongodb').MongoClient;
let servidor = 'mongodb://localhost:27017/jaspion';


mongoCliente.connect(servidor, { useNewUrlParser: true }, function (erro, cliente) {

    (erro) ? console.log('ERRO DE CONEXÃO ' + erro) : console.log('CONEXÃO ESTABELECIDA');


    let filtro = { _id: 1 };
    // let filtro = {};
    let colecao = cliente.db('jaspion');

    colecao.collection('usuarios').find(filtro).toArray(function (erro, resultado) {

        resultado.forEach(function (doc) {
            console.log('Login: ' + doc.login);
            console.log('Senha: ' + doc.senha);
            console.log('--------------------');
        }, this);


    });

    cliente.close();
});