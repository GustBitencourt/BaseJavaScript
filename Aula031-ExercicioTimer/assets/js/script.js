const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

//responsável pela formatação do timer
function criaHoraDosSegundos(segundos) {
    //transformando os segundos em milisegundos
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC',
    });
}

function iniciaRelogio() {
    timer = setInterval(() => {        
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
        relogio.style.color = 'green'
    }, 1000)
}


iniciar.addEventListener('click', () => {
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', () => {
    clearInterval(timer)
    relogio.style.color = 'red'
});

zerar.addEventListener('click', () => {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    relogio.style.color = 'black';
    segundos = 0;
});