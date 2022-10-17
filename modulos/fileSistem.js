const fs = require('fs');

function read(route, cb) {
    fs.readFile(route, (error, data) => {
        console.log(data.toString());
    });
}

function write(route, contents, cb) {
    fs.writeFile(route, contents, error => {
        error ? `No he podido escribirlo ${error}` : 'Se ha escrito correctamente';
    });
}

function clean(route, cb) {
    fs.unlink(route, cb);
}

write(`${__dirname}/archivo1.txt`, 'Soy un archivo nuevo');
read(`${__dirname}/archivo1.txt`);
clean(`${__dirname}/archivo.txt`, console.log);
clean(`${__dirname}/archivo1.txt`, console.log);