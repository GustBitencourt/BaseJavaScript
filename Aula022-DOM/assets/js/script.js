const elementos = [
    {tag: 'p', texto: 'texto em tag p'},
    {tag: 'div', texto: 'texto em tag div'},
    {tag: 'footer', texto: 'texto em tag footer'},
    {tag: 'section', texto: 'texto em tag section'},
]

const container = document.querySelector('.container');
const div = document.createElement('div');
//estiliza elemento
div.style.backgroundColor = 'red'

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    //criando tags
    let createTag = document.createElement(tag);
    //criando nó de texto
    let textoCriado = document.createTextNode(texto);
    createTag.appendChild(textoCriado);
    div.appendChild(createTag);
} 

//adicionando ao container principal
container.appendChild(div);