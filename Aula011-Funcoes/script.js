function hail() {
    console.log('Hello you');
}

hail();

//parametros
//com return podemos armazenar o valor da função
function hiYou(nome) {
    console.log('Console.log: ', `Olá ${nome}`);
    return 'Vai Corinthians, by ' + nome;
}
const variavel = hiYou('armazenandoReturn');
console.log(variavel); 
hiYou('Gustavo');


//Dois parametros 
function soma(num1, num2) {
    resultado = num1 + num2;
    return resultado;
}

console.log(soma(5, 2));


//FUNÇÕES ANONIMAS
const raiz = function(num) {
    return num ** 0.5;
}
console.log(raiz(5));
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));



//ARROW FUNCTIONS
const aoQuadrado = (n) => n * n;
console.log(aoQuadrado(5));
console.log(aoQuadrado(9));
console.log(aoQuadrado(16));
console.log(aoQuadrado(25));
