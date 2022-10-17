const { Console } = require("console");

console.log('hola');
console.info('hola');
console.error('hola');
console.warn('hola');
console.table('hola');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');



console.group('conversación');
console.groupCollapsed('bla bla bla...');
console.groupCollapsed('bla bla bla...');
console.groupCollapsed('bla bla bla...');
console.groupEnd();


function function1() {
    console.group('Funcion 1');
    console.groupCollapsed('oli');
    function2();
    console.groupCollapsed('Hemos vuelto a la función 1')
    console.groupEnd('Funcion 1');
}

function function2() {
    console.group('funcion 2');
  
}

console.log('empezamos');
function1(); 