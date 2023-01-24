function somaArrays(arr) {
  return arr.reduce((a, b) => a + b, 0)
}

console.log(somaArrays([10, 100, 40]))
console.log(somaArrays([10, 100, 1000, 1]))
console.log(somaArrays([-50, 0, 50, 200]))