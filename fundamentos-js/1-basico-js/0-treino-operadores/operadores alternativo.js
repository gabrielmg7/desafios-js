//=========================
// OPERADORES ARITMÉTICOS 
//=========================

// Soma os números que forem passados na função ex.: soma(12,52,34,77)
const soma = (...numbers) => {
    return numbers.reduce((prev,number)=>prev+number,0);
};

// Subtrai os números que forem passados na função ex.: subtrai(12,52,34,77)
const subtrai = (...numbers) => {
    return numbers.reduce((prev,number,index)=>{
        if (index===0) return number
        return prev-number;
    });
};

// Operador de Divisão
const divide = (x, y) => {
    return x / y;
};

// Multiplica os números que forem passados na função ex.: multiplica(12,52,34,77)
const multiplica = (...numbers) => {
    return numbers.reduce((prev,number)=>prev*number,1);
};
