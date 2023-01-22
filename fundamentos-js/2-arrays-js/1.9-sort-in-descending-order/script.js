function ordemDecrescente(arr) {

    return arr.sort((a, b) => b - a);
}

console.log(ordemDecrescente([1, 3, 2]))
console.log(ordemDecrescente([4, 2, 3, 1]))