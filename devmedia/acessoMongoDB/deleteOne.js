let mongoCliente = require('mongodb').MongoClient;
let servidor = 'mongodb://localhost:27017/jaspion';


mongoCliente.connect(servidor, { useNewUrlParser: true }, function (erro, cliente) {

    (erro) ? console.log('ERRO DE CONEXÃO ' + erro) : console.log('CONEXÃO ESTABELECIDA');

    let colecao = cliente.db('jaspion');
    let filtro = { login: 'Joel' };

    colecao.collection('usuarios').deleteOne(filtro, function (erro, resultado) {
        (erro) ? console.log('ERRO NA EXCLUSÃO ' + erro) : console.log('DOCUMENTO EXCLUÍDO ');
    });

    cliente.close();
});
