let mongoCliente = require('mongodb').MongoClient; 
let servidor = 'mongodb://localhost:27017/jaspion';


mongoCliente.connect(servidor,  { useNewUrlParser: true }, function(erro, Cliente) {

    (erro) ? console.log('ERRO DE CONEXÃO ' + erro) : console.log('CONEXÃO ESTABELECIDA');  

});