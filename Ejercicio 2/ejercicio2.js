'use strict'

var nombre1 = 'Pablo';
var calificacionesPablo = [14,19,16];
var nombre2 = 'Maria';
var calificacionesMaria = [12,16,10];

var promedioPablo = calcularPromedio(calificacionesPablo);
console.log("Promedio "+nombre1+": "+promedioPablo+" : "+aprobatorio(promedioPablo));

var promedioMaria = calcularPromedio(calificacionesMaria);
console.log("Promedio "+nombre2+": "+ promedioMaria+ " : "+aprobatorio(promedioMaria));

mayor(promedioMaria,promedioPablo);



function  calcularPromedio(elemento){
    var suma = 0, contador=0,promedio; 
    for (var i in elemento){
         suma += elemento[i];
         contador++;
    }
    return promedio = suma/contador;
}

function aprobatorio(valor){
    var situacion;
    valor > 13 ? situacion ="Aprobado" : situacion= "reprobado"
    return  situacion;
}

function mayor(promedio1,promedio2){
    promedio1 > promedio2 ? console.log('Maria tiene mayor promedio'):console.log('Pablo tiene mayor promedio');
}