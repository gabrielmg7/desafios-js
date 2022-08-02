/*
 * @author Gabriel Moura Guimarães |
 */

const verificaDivisibilidade = (x, y) => {
    while (true) {
        if (x % y === 0) {
            return x
        }
        ++x
    };
};A

console.log(verificaDivisibilidade(1, 23));
console.log(verificaDivisibilidade(23, 23));
console.log(verificaDivisibilidade(7, 3));
console.log(verificaDivisibilidade(-5, 7));