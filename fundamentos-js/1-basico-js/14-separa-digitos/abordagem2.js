//de maneira "matemática" sem tratar o número como uma sequência:

const a = 123456;

const separaDigitos = (a) => {
    var digitos = [];
    while (a > 0) {
        digitos.push(a % 10);
        a = Math.trunc(a / 10);
    }

    digitos.reverse();

    return console.log(digitos);
}

separaDigitos(a);