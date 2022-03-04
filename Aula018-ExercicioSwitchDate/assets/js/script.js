const data = new Date();
const dayWeek = data.getDay();
const month = data.getMonth();

console.log(data.getFullYear)

function diaString(dayWeek) {
    let diaSemanaTexto;

    switch (dayWeek) {
      case 0:
        return diaSemanaTexto = "Domingo";
      case 1:
        return diaSemanaTexto = "Segunda-Feira";
      case 2:
        return diaSemanaTexto = "Terça-Feira";
      case 3:
        return diaSemanaTexto = "Quarta-Feira";
      case 4:
        return diaSemanaTexto = "Quinta-Feira";
      case 5:
        return diaSemanaTexto = "Sexta-Feira";
      case 6:
        return diaSemanaTexto = "Sábado";
    
      default:
        return diaSemanaTexto = "";
    }
}

function monthString(month) {
    let mesTexto;

    switch(month) {
        case 0:
            return mesTexto = 'Janeiro';
        case 1:
            return mesTexto = 'Fevereiro';
        case 2:
            return mesTexto = 'Março';
        case 3:
            return mesTexto = 'Abril';
        case 4:
            return mesTexto = 'Maio';
        case 5:
            return mesTexto = 'Junho';
        case 6:
            return mesTexto = 'Julho';
        case 7:
            return mesTexto = 'Agosto';
        case 8:
            return mesTexto = 'Setembro';
        case 9:
            return mesTexto = 'Outubro';
        case 10:
            return mesTexto = 'Novembro';
        case 11:
            return mesTexto = 'Dezembro';
    }

}

function setDate() {
    const title = document.querySelector('#showDate');

    title.innerHTML = `${diaString(dayWeek)}, ${data.getDate()} de ${monthString(month)} de ${data.getFullYear()} </br> ${data.getHours()}:${data.getMinutes()}`;
}

setDate();