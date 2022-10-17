const bcrypt = require('bcrypt');

const password = '123Segura';

bcrypt.hash(password, 5, (error, hash) => { // Hashea el password
    console.log(hash);

    bcrypt.compare(password, hash, (error, result) => { //Compara el password para ver si coincide
        console.error(error);
        console.log(result);
    });
});