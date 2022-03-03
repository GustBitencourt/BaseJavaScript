let umaString = 'O rato roeu a roupa do rei de roma'

//tamanho
console.log(umaString.length);

//um indice especifico
console.log(umaString[6]);

//um indice especifico
console.log(umaString.charAt(5));

//Concatena
console.log(umaString.concat(' Maior torcida do Mundo!'));

//Volta o indice da busca feita da esquerda pra direita
console.log(umaString.indexOf('Corinthians'));

//Volta o indice da busca feita de trás pra frente - o resultado é o mesmo
console.log(umaString.lastIndexOf('Corinthians'))

//retorna as letras minusculas através de expresao regular
console.log(umaString.match(/[a-z]/g));

//search faz o mesmo com ou sem expressao regular
console.log(umaString.search(/[a-z]/g));

//substitui um treco por outro
console.log(umaString.replace('rato', 'macaco'));

//retorna o trecho selecionando atraves do indice - se usar negativo ele pega toda string e subtrai o valor
console.log(umaString.slice(5, 9));
console.log(umaString.slice(-10));


console.log(umaString.split(' '));
console.log(umaString.split(' ', 3));

console.log(umaString.toLowerCase);
console.log(umaString.toUpperCase);

