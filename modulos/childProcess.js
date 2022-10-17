const { exec, spawn } = require('child_process');
const { stdout, stderr } = require('process');

// exec('dir', (error, stdout, stderr) => {
/* exec('node modulos/console.js', (error, stdout, stderr) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log(stdout);
}); */

let process1 = spawn('dir');

// console.log(process1);
// console.log(process1.pid);
console.log(process1.connected);

process1.stdout.on('data', dat => {
    console.log(process.killed);
    console.log(dat.toString())
});

process1.on('exit...', () =>{ 
    console.log('El proceso acabo.')
    console.log(process1.killed);
});