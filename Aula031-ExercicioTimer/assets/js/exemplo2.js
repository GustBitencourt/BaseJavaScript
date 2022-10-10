const relogio = document.querySelector('.relogio');
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

document.addEventListener('click', (event) => {
    const el = event.target

    if(el.classList.contains('iniciar')) {
        clearInterval(timer);
        iniciaRelogio();
    }

    if(el.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.style.color = 'red';
    }

    if(el.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        relogio.style.color = 'black';
        segundos = 0;
    }
})