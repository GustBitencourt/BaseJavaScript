let num1 = 25;
let num2 = 25.723423523424;
let soma = num1 + num2;

// transforma o numero em string
console.log(num1.toString() + num2);

//Selecionando numero de casas decimais
console.log(soma.toFixed(2));
console.log(soma.toFixed(4));

//verificando se um numero é inteiro
console.log(Number.isInteger(num1));

//verifica se é Not a number
console.log(Number.isNaN(num1));

console.log('\nDemonstração da impresição:');

let number1 = 0.9;
let number2 = 0.1;
let soma2 = number1 + number2;
let somaReal = (((number1 * 100) + (number2 * 100)) / 100)

console.log(soma2);
console.log(somaReal);
console.log(soma2.toFixed(2));
console.log(Number.isInteger(soma2.toFixed(2))); //retorna false pra afirmação de integer
console.log(Number.isInteger(somaReal)); //retorna true pra afirmação de integer



