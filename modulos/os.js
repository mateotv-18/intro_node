const os = require('os');

console.log(os.arch()); // Indica la arquitectura del remoto (bytes)
console.log(os.platform()); // Acceder al sistema operativo que tiene tu remoto
console.log(os.cpus().length); // Información de las cpus del sistema
console.log(os.constants); // Errores del sistemas y prioridades
console.log(os.freemem()); //bytes de memoria disponibles

const SIZE = 1024;
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }

console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));
console.log(gb(os.totalmem())); // GB disponibles en tu remoto

console.log(os.homedir()); // Archivo principal
console.log(os.tmpdir()); // Archivo temporal
console.log(os.hostname()); // Nombre de la maquina
console.log(os.networkInterfaces()); //Interfaces de red activas en la maquina