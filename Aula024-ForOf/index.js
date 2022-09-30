const nome = 'José Ferreira Neto'

// Não da pra acessar objetos
/* Para objetos iteráveis - acessa seu valor diretamente */
console.log('Na string')
for(let letters of nome) {
    console.log(letters)
}

console.log('\nNo array')
const students = ['João', 'Isa', 'Victor', 'Kaline']
for(let student of students) {
    console.log(student)
}

console.log('\nFor each em array')
const cities = ['New York', 'San Francisco', 'Chicago', 'Dallas', 'Detroit']
cities.forEach((valor, indice, array) => {
    console.log(indice, valor, array)
})