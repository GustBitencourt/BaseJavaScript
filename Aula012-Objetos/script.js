const pessoa1 = {
    name: 'Gustavo',
    lastname: 'Gama',
    age: 25,
    apresentacao() {
        console.log(`Meu nome é ${this.name} ${this.lastname}, tenho ${this.age} anos`);
    },

    aniversario() {
        this.age++
    }
}

pessoa1.apresentacao();
pessoa1.aniversario();
pessoa1.apresentacao();
pessoa1.aniversario();
console.log(pessoa1.name);
console.log(pessoa1.lastname);
console.log(pessoa1.age);

function criaPessoa(name, lastname, age) {
    return {
        name: name,
        lastname: lastname,
        age: age
    };
}

const firstPerson = criaPessoa('João', 'Pedro', 23);
console.log(firstPerson);
console.log(firstPerson.name);
console.log(firstPerson.lastname);
console.log(firstPerson.age);

const secondPerson = criaPessoa('Victor', 'Diberto', 27);
const thirdPerson = criaPessoa('Samuel', 'Mendes', 21);