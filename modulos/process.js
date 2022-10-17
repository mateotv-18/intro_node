process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
    console.log(' si se recoge');
});
console.log('si se recoge');

process.on('exit', () => {
    console.log('El proceso acabó');
    setTimeout(() => console.log('Esto no se vera'), 1000);
    setTimeout(() => console.log('Esto no se si se vera miremosss'), 0);
    console.log('pero esto si se vio');
});
setTimeout(() => console.log('Esto si se vera'), 1000);
console.log('si se recoge');

process.on('uncaughtException', (error, origen) => {
    console.error(`Se nos ha olvidado capturaru un error \n${error}`);
    setTimeout(() => console.log('Viene desde las ecepciones'), 1000);
    console.log('si se recoge');
});
console.log('si se recoge');

functioNoExistente();

console.log('no se recoge');



