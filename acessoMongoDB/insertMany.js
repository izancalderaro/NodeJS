let mongoCliente = require('mongodb').MongoClient;
// const assert = require('assert');
let servidor = 'mongodb://localhost:27017/jaspion';
    

mongoCliente.connect(servidor, { useNewUrlParser: true }, function (erro, cliente) {
    

    (erro) ? console.log('ERRO DE CONEXÃO ' + erro) : console.log('CONEXÃO ESTABELECIDA');

    // assert.equal(null, erro); 
    
    let topico = [
                 { login: 'Joel', senha: '123'},
                 { login: 'Maria', senha: '123'},
                 { login: 'João', senha: '123'}
                ]
       
    let colecao = cliente.db('jaspion');



    colecao.collection('usuarios').insertMany(topico, function(erro, resultado){
        (erro) ? console.log('ERRO AO INSERIR DOCUMENTO' + erro) : console.log(resultado.insertedCount + ' DOCUMENTOS INSERIDOS COM SUCESSO');
    });
    
    
    cliente.close();
});

