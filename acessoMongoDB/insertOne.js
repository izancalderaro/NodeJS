let mongoCliente = require('mongodb').MongoClient;
let servidor = 'mongodb://localhost:27017/jaspion';
    

mongoCliente.connect(servidor, { useNewUrlParser: true }, function (erro, cliente) {
   
    (erro) ? console.log('ERRO DE CONEXÃO ' + erro) : console.log('CONEXÃO ESTABELECIDA');

    
    let topico = {
        titulo  : "Erro de compilação",
        conteudo: "Não consigo compilar meu projeto",
        tags    : ["Java","Android","Mobile"]
    };

    let colecao = cliente.db('jaspion');

    colecao.collection('topicos').insertOne(topico, function(erro, resultado){
        (erro) ? console.log('ERRO AO INSERIR DOCUMENTO' + erro) : console.log('DOCUMENTO INSERIDO COM SUCESSO');
    });  
    
    cliente.close();
});


