var tiempo = document.querySelector("#tiempo");
var segundos=0;


/*

set interval (intervalos de tiempo)

setInterval(function, tiempo)

setInterval sirve para ejecutar una funcion por 
x "tiempo" determinado

innerHTML inserta dentro del dom del html

*/

var intervalo = setInterval(function(){
    segundos++;
    tiempo.innerHTML=segundos;
},1000);



/*
SET TIMEOUT (retardo de tiempo)
setTimeout(function, tiempo)
alert() mensaje en ventana emergente
*/

/*
setTimeout se ejecuta solo una vez al trasncurrir el tiempo
setInterval se ejecuta varias veces cada cierto "tiempo"
clearInterval() detiene un intervalo de tiempo
*/

setTimeout(function(){
    clearInterval(intervalo);
    //alert("Se cumplió el tiempo")
}, 5000);