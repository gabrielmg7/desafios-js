// Escreva uma função que recebe uma string (a) e um número (n) como argumento
// Retorna o enésimo caractere de 'a'

/*
 * @author Gabriel Moura Guimarães |
 */

const a = "valor";
const n = 3;

const enesimoCaractere = (a, n) => {
    return (a.charAt(n))
};

console.log(enesimoCaractere(a, n))