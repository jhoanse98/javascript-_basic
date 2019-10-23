var recuadro = document.querySelector("#recuadro");

/*
Eventos desde el DOM
*/

function cambiarcolor(){
    recuadro.style.background="red";

}

/*
EVENTOS DESDE JAVASCRIPT
*/

var boton = document.querySelector("#boton");

boton.addEventListener("click", moverCaja); //"ponemos el evento (en este caso click) y luego la funcion"

function moverCaja(){
    recuadro.style.width="500px";
    recuadro.style.transition = "3s width ease";
}


