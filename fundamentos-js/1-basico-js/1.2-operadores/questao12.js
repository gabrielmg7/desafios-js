/*
 * @author Gabriel Moura Guimarães |
 */

const a = 340;
const b = 230;

const calculaVariaveis = (a, b) => {
    if (a < b) {
        var mensagem = "É maior! Dividindo..."
        var res = a / b
    } else {
        var mensagem = "Não é maior! Multiplicando..."
        var res = a * b
    }
    console.log(mensagem)
    console.log("Resultado: ", res)
};

calculaVariaveis(a, b);