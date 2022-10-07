//função que recebe um número
// se divisivel por 3 retorna Fizz
// se divisivel por 5 retorna BUzz
// se divisivel por 3 e 5 retorna FizzBUzz
//se não for divisivelpor nenhum retorna o próprio número
// se não for um numero retorne um aviso
// rode a função em um loop de 0 a 100

const ehFizzBuzz = (num) => {
    if (typeof num !== 'number') return 'Não é um tipo NUMÉRICO';
    if (num === 0) return 'NÃO é possível dividir ZERO';

    if(num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';

    } else if (num % 3 === 0) {
        return 'Fizz';

    } else if (num % 5 === 0) {
        return 'Buzz';

    } else {
        return num;
    }
}

console.log(ehFizzBuzz('true'))
for(i = 0; i <= 100; i++) {
    console.log(i, ehFizzBuzz(i));
}


console.log('\n==============SOLUÇÂO 2===========');
const ehFizzBuzz2 = (num) => {
    if (typeof num !== 'number') return 'Não é um tipo NUMÉRICO';
    if (num === 0) return 'NÃO é possível dividir ZERO';    
    if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz'; 
    return num
    
}
