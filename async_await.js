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
            resolve(name);
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

async function main() {
    await hello('Matiiu');
    await talk();
    await goodBye('Pedro');
}
main();
console.log('Iniciando proceso...');
