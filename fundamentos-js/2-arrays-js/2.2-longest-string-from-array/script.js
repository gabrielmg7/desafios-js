function myFunction(arr) {
    return arr.reduce((a, b) => (a.length >= b.length ? a : b))
}

console.log(myFunction(['help', 'me'])) //Esperado: 'help'
console.log(myFunction(['I', 'need', 'candy'])) //Esperado: 'candy'
