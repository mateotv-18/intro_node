// let buffer = Buffer.alloc(4); // Espacio de memoria 
//let buffer = Buffer.from([1, 2, 3]); // valor que se guarda en memoria 
let buffer = Buffer.from('Hola');

console.log(buffer);

let abc = Buffer.alloc(26);

for(let i = 0; i < 26; i++) {
    abc[i] = i + 97;
}
console.log(abc.toString());
