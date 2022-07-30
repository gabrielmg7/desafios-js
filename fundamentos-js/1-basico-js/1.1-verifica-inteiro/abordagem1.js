/*
 * @author Gabriel Moura Guimarães |
 */

const x = 3.5;

const verificaInteiro = (x) => {
    (Number.isInteger(x) == true) ? console.log(x, "é um inteiro!") : console.log(x, "não é um inteiro!") 
};

verificaInteiro(x);