function myFunction(arr) {
    arr.reduce((a, b) => a + b, 0) / arr.length
}


console.log(myFunction([10, 100, 40]))
console.log(myFunction([10, 100, 1000]))
console.log(myFunction([-50, 0, 50, 200]))