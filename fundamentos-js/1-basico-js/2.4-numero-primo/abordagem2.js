const number = 35;
let isPrime = true;

if (number === 1) {
    console.log("1 não é número primo nem composto.");
}

else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} é um número primo.`);
    } else {
        console.log(`${number} não é um número primo.`);
    };
}

else {
    console.log("o número não é um número primo.");
};