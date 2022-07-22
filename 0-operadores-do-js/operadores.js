var x, y, res;

//=========================
// OPERADORES ARITMÉTICOS 
//=========================

// Operador de Soma
const soma = (x, y, res) => {
    return res = x + y;
};

// Operador de Subtração
const subtrai = (x, y, res) => {
    return res = x - y;
};

// Operador de Divisão
const divide = (x, y, res) => {
    return res = x / y;
};

// Operador de Multiplicação
const multiplica = (x, y, res) => {
    return res = x * y;
};

// Operador de Incremento (x++)
const incrementa = (x) => {
    return x++;
};

// Operador de Decremento (x--)
const decrementa = (x) => {
    return x--;
};

// Operador de Resto (x % y)
const resto = (x, y, res) => {
    return res = x % y;
}

// Operador de Exponencial (x ** y)
const exponenciacao = (x, y, res) => {
    return res = x ** y;
}

//=========================
// OPERADORES DE ATRIBUIÇÃO 
//=========================
// Atribuição
const atribui = (x, y) => {
    return x = y;
};

// Operador de Atribuição de adição (x = x + y)
const atribuiAdicao = (x, y) => {
    return x += y;
};

// Operador de Atribuição de subtração (x = x - y)
const atribuiSubtracao = (x, y) => {
    return x -= y;
};

// Operador de Atribuição de multiplicação (x = x * y)
const atribuiMultiplicacao = (x, y) => {
    return x *= y;
};

// Operador de Atribuição de divisão (x = x / y)
const atribuiDivisao = (x, y) => {
    return x /= y;
};

// Operador de Atribuição de resto (x = x % y)
const atribuiResto = (x, y) => {
    return x %= y;
};

// Operador de Atribuição exponencial (x = x ** y)
const atribuiExponente = (x, y) => {
    return x **= y
};

// Operador de Atribuição bit-a-bit por deslocamento á esquerda (x = x << y)
const atribuiEsquerda = (x, y) => {
    return x <<= y;
};

// Operador de Atribuição bit-a-bit por deslocamento á direita (x = x >> y)
const atribuiDireita = (x, y) => {
    return x >>= y;
};

// Operador de Atribuição de bit-a-bit deslocamento á direita não assinado (x = x >>> y)
const atribuiDireitaNaoAssinado = (x, y) => {
    return x >>>= y;
};

//===============================
// ATRIBUIÇÃO COM OPERADOR LÓGICO
//===============================

// Operador de Atribuição AND bit-a-bit (x = x & y)
const atribuiAND = (x, y) => {
    return x &= y;
};

// Operador de Atribuição XOR bit-a-bit (x = x ^ y)
const atribuiXOR = (x, y) => {
    return x ^= y;
};

// Operador de Atribuição OR bit-a-bit (x = x | y)
const atribuiOR = (x, y) => {
    return x |= y;
};

//=========================
// OPERADORES DE COMPARAÇÃO
//=========================

// Operador de Igualdade estrita (x === y)
const igualdadeEstrita = (x, y) => {
    if (x === y) {
        return ("x e y são estritamente iguais! ", x, "===", y)
    }
    return ("x e y não são estritamente iguais!")
};

// Operador de Desigualdade estrita (x !== y)
const desigualdadeEstrita = (x, y) => {
    if (x !== y) {
        return ("x e y são estritamente desiguais!", x, "!==", y)
    }
    return ("x e y não são estritamente desiguais!")
};

// Operador Menor que (x < y)
const menorQue = (x, y) => {
    if (x < y) {
        return ("x é menor que y! ", x, " < ", y)
    }
    return ("x não é menor que y!")
};

// Operador Menor que ou igual (x <= y)
const menorQueOuIgual = (x, y) => {
    if (x <= y) {
        return ("x é menor ou igual a y! ", x, " <= ", y)
    }
    return ("x não é menor ou igual a y!")
};

// Operador Maior que (x > y)
const maiorQue = (x, y) => {
    if (x > y) {
        return ("x é maior que y! ", x, " > ", y)
    }
    return ("x não é maior que y!")

};

// Operador Maior que ou igual (x >= y)
const maiorQueOuIgual = (x, y) => {
    if (x >= y) {
        return ("x é maior ou igual a y! ", x, " >= ", y)
    }
    return ("x não é maior ou igual a y!")
};

//Operador Ternário 
const verificaTernario = (x, y, res) => {
    (res > 0) ? res : (res = x + y)
};