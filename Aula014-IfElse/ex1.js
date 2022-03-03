/*
Entre 0 - 5 Boa Madrugada
Entre 6 - 11 Bom dia
Entre 12 - 17 Boa Tarde
Entre 18 - 23 Boa Noite
*/
const hora = 14;

if (hora >= 0 && hora <= 5) {
    console.log("Boa Madrugada!!");

} else if(hora >= 6 && hora <= 11) {
    console.log("Bom Dia!!!");

} else if(hora >= 12 && hora <= 17) {
    console.log("Boa Tarde!!!!");

} else if(hora >= 18 && hora <= 23) {
    console.log("Boa Noite!!!!");

}