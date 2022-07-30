/*
 * @author Gabriel Moura Guimarães |
 */

const x = 12.2;

const verificaInteiro = (x) => {
    if (x % 1 === 0) {
        console.log(x, "é um inteiro");
    } else {
        console.log(x, "é um float");
    }
    console.log(x % 1); // .19999
};
verificaInteiro(x);