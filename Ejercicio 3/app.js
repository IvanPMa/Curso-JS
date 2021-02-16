'use strict'
do{
    var grados = Number(prompt('Ingresa un valor:'));
    
}while (isNaN(grados) || grados =="");

var opcion =parseInt(prompt ('1. F a C \n 2.C a F'));

switch (opcion){
    case 1: 
        let fahrenheit = (grados * 1.8) +32;
        console.log(fahrenheit);
    break;
    case 2:
        let celcius = (grados - 32 )/1.8;
        console.log(celcius);
    break;
    default:
        console.log("Selecciona una opcion correcta");
    break;

}
