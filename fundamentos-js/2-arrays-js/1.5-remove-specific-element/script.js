function specificElement(a, b) {
    return a.filter(a => a !== b)
}

//CASOS DE TESTE
console.log(specificElement([1, 2, 3], 2))
console.log(specificElement([1, 2, '2'], '2'))
console.log(specificElement([false, '2', 1], false))
console.log(specificElement([1, 2, '2', 1], 1))