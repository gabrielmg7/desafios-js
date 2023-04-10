const fatorial = (number) => {
    if(number < 0) return "inexistente"
    if (number === 1 || number === 0) return 1
    return fatorial(number-1) * number
}