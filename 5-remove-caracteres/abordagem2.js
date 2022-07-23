// Escreva uma função que recebe uma string (a) como argumento
// Remove os 3 primeiros caracteres 
// Retorna o resultado

/*
 * @author Gabriel Moura Guimarães |
 */

const a = 'string qualquer'

const removeCaracteres = (a) => {
    return (a.substring(1, 4))
};
console.log(removeCaracteres(a)); 