const h3 = document.querySelector('#semSwitch');
const dia = new Date();


function diaString(diaSemana) {
    let diasSemanaTexto = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    return diasSemanaTexto[diaSemana];
}

function monthString(meses) {
    let mesTexto = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    return mesTexto[meses];
}

function setDate(dia) {
    const diaSemana = dia.getDay();
    const numeroMes = dia.getMonth();

    const nomeDia = diaString(diaSemana);
    const nomeMes = monthString(numeroMes);

    return `${nomeDia}, ${dia.getDate()} de ${nomeMes} de ${dia.getFullYear()} ${dia.toLocaleTimeString('pt-BR')}`;    
}

h3.innerHTML = setDate(dia);