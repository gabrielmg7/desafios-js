// Escreve uma função que recebe um número como argumento
// Se o número for par, retorna true
// Caso contrário, retorna falso

/*
 * @author Gabriel Moura Guimarães |
 */

let num = 3;

const checarParOuImpar = (num) => {
    var resto = num % 2;

    if (resto == 0) {
        console.log(num + " é par");
    } else {
        console.log(num + " é impar");
    }
}
checarParOuImpar(num)