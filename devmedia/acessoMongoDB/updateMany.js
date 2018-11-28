let mongoCliente = require('mongodb').MongoClient; 
let servidor = 'mongodb://localhost:27017/jaspion';


mongoCliente.connect(servidor,  { useNewUrlParser: true }, function(erro, cliente) {

    (erro) ? console.log('ERRO DE CONEXÃO ' + erro) : console.log('CONEXÃO ESTABELECIDA');  

    
    let campo = {$set: {ativo : true}};     
    // let filtro = {"_id" : "5b75e07299a8fa1a7c6473c6"};
    // let filtro = {'_id' : '5b75e07299a8fa1a7c6473c9'};
    let filtro = { };

    let colecao = cliente.db('jaspion'); 

    colecao.collection('usuarios').updateMany(filtro, campo, function(erro, resultado){
        (erro) ? console.log('ERRO AO ATUALIZAR DOCUMENTO ' + erro) : console.log('DOCUMENTO ATUALIZADO COM SUCESSO');
    });


    cliente.close();

});