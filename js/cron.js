window.onload = function(){
var segundos = 00;
var dez = 00;
var appenddez = document.getElementById("dez");
var appendSegundos = document.getElementById("segundos");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");

var intervalo;

buttonStart.onclick = function(){
    clearInterval(intervalo);
    intervalo =setInterval(startTimer, 10);
}

buttonStop.onclick = function(){
    clearInterval(intervalo)
}

buttonReset.onclick = function(){
    clearInterval(intervalo);
    dez = "00";
    segundos = "00";
    appendSegundos.innerHTML = segundos;
    appenddez.innerHTML = dez;

}

function startTimer (){
    dez ++;
    if(dez <= 9){
        appenddez.innerHTML = "0" + dez
    }
if(dez > 9 ){
    appenddez.innerHTML = dez;

}

if(dez > 99){
    console.log("segundos");
    segundos++;
    appendSegundos.innerHTML = "0" + segundos;

    dez = 0;
    appenddez.innerHTML = "0" + 0;
}

if(segundos > 9){
    appendSegundos.innerHTML = segundos;
}


}


}