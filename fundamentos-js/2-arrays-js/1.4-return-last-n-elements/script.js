function lastElement (a, n) {
    return (a.slice(-n))
}

//CASOS DE TESTE
console.log(lastElement([1, 2, 3, 4, 5, 6, 7, 8], 3))
console.log(lastElement([1, 2, 3], 6))
console.log(lastElement([1, 2, 3, 4, 5, 6, 7, 8], 3))