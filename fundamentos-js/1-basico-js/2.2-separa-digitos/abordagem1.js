/*
 * @author Gabriel Moura Guimarães |
 */

//Essa abordagem não é eficaz para números muito grandes.

const a = 123456;

const separaDigitos = (a) => {
    var digitos = a.toString().split('');
    var digito = digitos.map(Number)
    console.log(digitos);
}
separaDigitos(a);