const h1 = document.querySelector('#solucaoSimples');
const date = new Date();

/* const opcoes = {
    dateStyle: 'full',
    timeStyle: 'full',
} */

h1.innerHTML = date.toLocaleDateString('pt-BR', { dateStyle: 'full'}) + ' ' + date.toLocaleTimeString('pt-BR');