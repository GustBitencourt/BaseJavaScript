const clubes = ['Bahia', 'Corinthians', 'Barcelona', 'Girona', 'PSG', 'Juventus']

/* For In */
/* array acessa o indice */
for(let i in clubes) {
    console.log(clubes[i])
}

for(let clube in clubes) {
    console.log(clubes[clube])
}

const pessoa = {
    name: 'João',
    lastname: 'Domingo',
    idade: 100,
}
//objetos acessa a chave - para acessar valor objeto[chave]
for(let key in pessoa) {
    console.log(key, pessoa[key])
}