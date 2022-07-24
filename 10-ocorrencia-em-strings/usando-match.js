// Escreva uma função que receba duas strings (str1 e str2) como argumentos
// Retorna o número de vezes que a ocorre em b

/*
 * @author Gabriel Moura Guimarães |
 */

let str1 = "CabaCaba";
let str2 = "aba";

const checaOcorrencia = (str1, str2) => {
    console.log("Repetições: ", str1.match(new RegExp(str2, 'g')).length);
};

checaOcorrencia(str1, str2);