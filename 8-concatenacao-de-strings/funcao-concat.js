// Escreva uma função que receba duas strings ('a' e 'b') como argumentos
// Se 'a' contém 'b', anexa 'b' ao início de 'a'
// Se não, anexa-o ao final
// Retorne a oncatenação

/*
 * @author Gabriel Moura Guimarães |
 */

const str1 = 'Olá 👋';
const str2 = '👋';

const concatenaStrings = (str1, str2) => {
    if (str1.includes(str2)) {
        var res = str2.concat(str1);
        return console.log("resultado: ", res)
    } else {
        var res = str1.concat(str2);
        return console.log("resultado: ", res)
    };
};

concatenaStrings(str1, str2);