'use strict'
var imc = document.querySelector("#imc");
var indice

imc.addEventListener('submit', function(){
    var peso = parseFloat(document.querySelector('#peso').value);
    var altura = parseFloat(document.querySelector('#altura').value);
    console.log(peso);


    if(peso.trim == 0 || isNaN(peso) ){
        alert("Campo vacio");
        return false;
    }


    indice = peso / Math.pow(altura, 2);
    console.log(indice);

    var div_resultado = document.querySelector('#resultado');
    var span = document.createElement('span');
    span.innerHTML += indice;
    div_resultado.appendChild(span);

});



