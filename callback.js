function hello(name, callback) {
    setTimeout(() => {
        console.log(`Hi, ${name}`);
        callback();
    }, 1000);
}

function talk(callback) {
    setTimeout(() => {
        console.log(`Great, and u?`);
        callback();
    }, 1000);

}

function goodBye(name, callback) {
    setTimeout(() => {
        console.log(`Adios ${name}`);
        callback();
    }, 1000);
}
console.log('Iniciando proceso...');




function conversation(name, acount, callback) {
    if (acount > 0) {
        talk(() => {
            conversation(name, --acount, callback);
        });
    } else {
        goodBye('Andres', callback);
    }
}

hello('Matiiu', name => {
    conversation(name, 3, () => {
        console.log('Proceso terminado');
    });
});

/* hello('Matiiu', () => {
    talk(() => {
        talk(() => {
            goodBye('Mery', () => {
                console.log(`i'm very busy`);
            });
        });
    });
    console.log('How are you?');
}); */