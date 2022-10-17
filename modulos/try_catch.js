x = 100
function anotherfunction() {
    damage();
}

function damage() {

}

function damageAsync(cb) {
    try {
    setTimeout(() => 4 * x, 1000);    
} catch (error) {
    console.error('Error en función async')
    cb(error);
}
}
try {
    damageAsync(error => {
        console.error('Error en la ejecución');
        console.log(error.message);
    });
} catch (error) {
    console.error(`vaya... Algo de rompio ${error.message}`);
    console.log(`Pero no pasa nada, lo hemos carturado`);
}

console.log('El final...');

