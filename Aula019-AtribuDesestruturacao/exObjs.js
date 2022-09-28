const pessoa = {
    nome: 'Gust',
    sobrenome: 'Gama',
    idade: 26,
    endereço: {
        rua: 'Av Rio de Janeiro',
        numero: 123
    }
}

const { nome, sobrenome, idade: age, endereço: { rua: r, numero } } = pessoa;
console.log(nome, sobrenome, age, r, numero);

const pessoa2 = {
    nome: 'Gust',
    sobrenome: 'Gama',
    idade: 26,
    endereço: {
        rua: 'Av Rio de Janeiro',
        numero: 123
    }
}
const { nome: name, ...resto } = pessoa2;
console.log(name, resto);