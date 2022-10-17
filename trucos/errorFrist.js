function asincrona(cb) {
    setTimeout(() => {
        try {
            let a = 3 + z;
            cb(null, a)
        } catch (error) {
            cb(error);
        }
    }, 1000);
}
try {
    asincrona((error, data) => {
        if(error) {
            console.error(`Tenemos un error \n${error}`);
            //  throw error; No funciona con funciones asincronas
            return;
        }
    
        console.log(`Todo ha marchado bien ${data}`);
    }); 
} catch (error) {
    console.error(`Hemos capturado un error \n${error}`);
}
