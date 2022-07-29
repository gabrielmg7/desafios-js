// Escreva uma função que receba 6 valores (a,b,c,d,e,f) como argumentos
// Soma a e b
// Então subtrai por c
// Multiplica por d e divide por e
// Finalmente aumenta a potência de f e retorne o resultado

/*
 * @author Gabriel Moura Guimarães |
 */

const a = 5.7, b = 9.1, c = 2.7, d = 6.0, e = 1.6, f = 2.5, res = 0;

const soma = (x, y, res) => {
    console.log(res = x + y);
};
const subtrai = (x, y, res) => {
    console.log(res = x - y);
};
const divide = (x, y, res) => {
    console.log(res = x / y);
};
const multiplica = (x, y, res) => {
    console.log(res = x * y);
};
const potencia = (base, expoente, res) => {
    console.log(res = Math.pow(base, expoente))
}

//TESTANDO

soma(a, b, res);
res == b;

subtrai(b, c, res);
res == c;

multiplica(c, d, res);
res == d;

divide(d, e, res);
res == e;

potencia(e, f, res);
console.log(res)