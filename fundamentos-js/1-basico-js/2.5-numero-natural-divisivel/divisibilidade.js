/*
 * @author Gabriel Moura Guimarães |
 */

const x = 35;
const y = 2;

const verificaDivisibilidade = (x, y) => {
        while (true) {
            if (x % y === 0) {
               return x
            }
            ++x
        }
    }

console.log(verificaDivisibilidade(x, y));