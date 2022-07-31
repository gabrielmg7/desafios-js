/*
 * @author Gabriel Moura Guimarães |
 */

const a = 32;
const divider = 2;

const checkPrimeNumber = (a) => {
    for (let i = 2; i < num; i++)
        if (num % i === 0) {
            return false
        }
};

const getSquareRoot = (a) => {
    return Math.sqrt(a);
};

const getFirstDivider = (a) => {
    let rootNumber = getSquareRoot(a);
    while (rootNumber % divider != 0)
        divider++;
    return (divider);
};

function primeNumber(a) {
    if (numeroDigitado == getPrimeiroDivisor(numeroDigitado)) {
        console.log(a, " é um número primo");
    } else {
        console.log(a, "não é um número primo!");
    };
};
