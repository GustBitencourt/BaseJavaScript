let dados = ['Gust', 12, null, true, ['Alah', 3]];
console.log(dados);


let alunos = ['Luiz', 'Ana', 'Beto', 'JP', 'JA', 'Pri', 'Neymar', 'Beyonce'];

//adiciona elemento ao final do array
alunos.push('Gust');
console.log(alunos)

//adiciona elemento no começo do array
alunos.unshift('Elua');
console.log(alunos);

//remove elemento do final do array pode ser salvo em uma variavel
alunos.pop();
console.log(alunos);

//remove elemento do começo do array pode ser salvo em uma variavel
alunos.shift();
console.log(alunos);

//primeiro parametro representa onde começa a seleção, o segundo não é seleciona EXEMPLO se selecionar o 3 indice iria até o segundo logo 3-1
console.log(alunos.slice(0, 3)); //do elemento 0 até 2
console.log(alunos.slice(3, 6));



