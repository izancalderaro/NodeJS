let http = require('http');

http.createServer(function (request, response) {  
    response.write('Primeiros passo com nodeJS');
    response.end();
}).listen(8081);

console.log('Servidor rodando em http://localhost:8081');
