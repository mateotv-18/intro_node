function hello(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hi, ${name}`);
            resolve();
        }, 1000);
    });

}

function talk(name) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`Great, and u?`);
            reject(name);
        }, 1000);
    });
   

}

function goodBye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log( `Adios ${name}`);
            resolve(name);
        }, 1000);
    });
}
console.log('Iniciando proceso...');

hello('Matiiu')
.then(talk)
.then(goodBye)
.then(name => {
    console.log('Terminado el proceso');
})
.catch(error => {
    console.error('Ha habido un error');
    console.log(error);
});