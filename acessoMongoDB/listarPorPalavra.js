let mongoCliente = require('mongodb').MongoClient;
let servidor = 'mongodb://localhost:27017/jaspion';


mongoCliente.connect(servidor, { useNewUrlParser: true }, function (erro, cliente) {

    (erro) ? console.log('ERRO DE CONEXÃO ' + erro) : console.log('CONEXÃO ESTABELECIDA');

    let colecao = cliente.db('jaspion');
    let indice = { conteudo: 'text' };
    colecao.createIndex(indice);
    let filtro = { $text: { $search: '%meu%' } };


    colecao.collection('topicos').find(filtro).toArray(function (erro, resultado) {

        resultado.forEach(function (doc) {
            console.log('Título: ' + doc.titulo);
            console.log('Conteúdo: ' + doc.conteudo);
            console.log('Tags: ' + doc.tags);
            console.log('--------------------');
        },this);


    });

    cliente.close();
});