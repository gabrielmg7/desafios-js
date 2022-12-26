function getFirstElement(a) {
    return a.slice(0, 3);
    //conta a partir de 0, com length 3
}

//CASOS DE TESTE
console.log(getFirstElement([1, 2, 3, 4]))
console.log(getFirstElement([5, 4, 3, 2, 1, 0]))
console.log(getFirstElement([99, 1, 1]))