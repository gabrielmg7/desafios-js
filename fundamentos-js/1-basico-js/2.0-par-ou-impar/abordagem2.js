// Escreve uma função que recebe um número como argumento
// Se o número for par, retorna true
// Caso contrário, retorna falso

/*
 * @author Gabriel Moura Guimarães |
 */

let num = 3;

const checarParOuImpar = (num) => {
    var resultado = num % 2 ===0? 'par':'impar';
    console.log(`Número ${num} é ${resultado}`); 
}
checarParOuImpar(num)