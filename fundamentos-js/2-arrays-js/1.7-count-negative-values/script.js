function valoresNegativos(array) {
    let negativeArray = array.filter(number => number < 0);
    return negativeArray.length
}

console.log(valoresNegativos([1, -2, 2, -4]))
console.log(valoresNegativos([0, 9, 1]))
console.log(valoresNegativos([4, -3, 2, 1, 0]))