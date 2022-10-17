const fs = require('fs');
const stream = require('stream');
const util = require('util');

// readableStream.on('end', () => console.log(data));

// process.stdout.write('Hola ');
// process.stdout.write('que ');
// process.stdout.write('tal ');

const transform = stream.transform;

function mayus() {
    transform.call(this);
}
util.inherits(mayus, transform);

mayus.prototype._transform = (chunk, codificacion, cb) => {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

var mayus = new Mayus();
ReadableStream
.pipe(mayus)
.pipe(process.stdout);
