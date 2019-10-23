var numeroAleatorio= document.querySelector("#numeroAleatorio");
var numero=0;
/*==========================

NUMEROS ALEATORIOS

El objeto Math permite realizar tareas matemáticas en los números.
Math.random = devuelve un número aleatorio entre 0 y 1. 0(inclusive) 1(exclusivo)
Math.floor = redondea a la cifra decimal mas cercana por debajo
Math.ceil = redondea a la cifra decimal mas cercana por encima
Math.round = redondea a la crifra decimal mas cercana ya se por encima o por debajo

============================*/

numero=Math.random();
console.log("numero", numero);

numeroAleatorio.innerHTML=numero;
