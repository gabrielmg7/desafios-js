

const a = 12354987;

const separaDigitos = (a) => {
   const output = [];

while (a) {
    output.push(a % 10);
    a = Math.floor(a/10);
};

console.log(output.reverse().join(',')); // 1,2,3,5,4,9,8,7
};
separaDigitos(a);
