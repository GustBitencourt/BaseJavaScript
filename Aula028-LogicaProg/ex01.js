// FUnção que receba dois números e retorne o maior
function biggestNumber (n1, n2) {
    if(n1 > n2) {
        return `O n1: ${n1} é MAIOR que o n2: ${n2}`;

    } else if(n1 < n2) {
        return `O n1: ${n1} é MENOR que o n2: ${n2}`

    } else {
        return `O n1: ${n1} é IGUAL ao n2: ${n2}`
    }
} 

console.log(biggestNumber(10, 5))
console.log(biggestNumber(5, 10))
console.log(biggestNumber(5, 5))