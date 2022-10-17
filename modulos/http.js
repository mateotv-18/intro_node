const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('Nueva petición');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            let saludo = hola();
            res.write(saludo);
            res.end();
            break;

        default:
            res.write('Errores 404: no se lo que quieres');
            res.end();
            break;
    }

    // res.writeHead(201, { 'Content-Type': 'text/plain' });
    // res.write('Hola ya se usar HTTP de Node.js');


    // res.end();
}
function hola() {
    return 'Hola que tal?';
}

console.log(`Escuchando http en el puerto 3000`);