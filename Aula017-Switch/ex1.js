function diaString(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
      case 0:
        return diaSemanaTexto = "Domingo";
      case 1:
        return diaSemanaTexto = "Segundo";
      case 2:
        return diaSemanaTexto = "Terça";
      case 3:
        return diaSemanaTexto = "Quarta";
      case 4:
        return diaSemanaTexto = "Quinta";
      case 5:
        return diaSemanaTexto = "Sexta";
      case 6:
        return diaSemanaTexto = "Sábado";
    
      default:
        return diaSemanaTexto = "";
    }
}

const data = new Date();
//dia semana é array vai de 0 a 6, sendo 0 domingo
let diaSemana = data.getDay();


