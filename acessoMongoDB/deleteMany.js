let mongoCliente = require('mongodb').MongoClient;
let servidor = 'mongodb://localhost:27017/jaspion';


mongoCliente.connect(servidor, { useNewUrlParser: true }, function (erro, cliente) {

    (erro) ? console.log('ERRO DE CONEXÃO ' + erro) : console.log('CONEXÃO ESTABELECIDA');

    let colecao = cliente.db('jaspion');
    let filtro = { ativo: true };

    colecao.collection('usuarios').deleteMany(filtro, function (erro, resultado) {
        (erro) ? console.log('ERRO NA EXCLUSÃO ' + erro) : console.log('DOCUMENTOS EXCLUÍDOS ');
    });

    cliente.close();
});
