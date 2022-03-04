//o tempo é em milisegundos logo temos que transformar
//const tresHora = 60 * 60 * 1000 * 3;
const data = new Date();

//parametro de data é ANO, MES(0 a 11 por ser array), DIA, HORA, MINUTO, SEGUNDOS, MILISEGUNDOS
const dataSelec = new Date(1996, 6, 25, 20, 30, 33);

console.log(data.toString());
console.log(dataSelec.toString());

//Quando passamos como string o mes tem seu valor normal
const dateString = new Date('1991-07-06 12:12:45')
console.log(dateString.toString());
console.log('Dia', dateString.getDate());
console.log('Mês', dateString.getMonth());
console.log('Ano', dateString.getYear());
console.log('Hora', dateString.getHours());
console.log('Minuto', dateString.getMinutes());
console.log('Segundo', dateString.getSeconds());
console.log('Milisegundo', dateString.getMilliseconds());
console.log('Dia semana', dateString.getDay());