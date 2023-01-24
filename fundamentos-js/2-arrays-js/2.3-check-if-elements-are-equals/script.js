function myFunction(arr) {
    return arr.every((el) => el === arr[0])
    
}

console.log(myFunction([true, true, true, true]))
console.log(myFunction(['test', 'test', 'test']))
console.log(myFunction([1, 1, 1, 2]))
console.log(myFunction(['10', 10, 10, 10]))
