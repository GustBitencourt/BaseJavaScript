//troque o valor das variáveis
let a = 'A';
let b = 'B';
let c = 'C';

let letras = [b, c, a];
[a, b, c] = letras;
console.log(a, b, c);

const numbers = [10, 20, 30, 40, 50, 60];
const [num1, num2, ...resto] = numbers;
const [, , ,num40, , num60] = numbers;
console.log(num1, num2, resto);
console.log(num40, num60);


