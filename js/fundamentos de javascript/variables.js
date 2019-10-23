var palabra= "palabra";

console.log("palabra", palabra);

//variables booleanas

var bool= true;
console.log("booleano", bool);

//variables tipo arreglo

var colores = ["rojo", "amarillo", "azul"];
console.log("colores", colores[0]);

// variables de tipo objeto {key: value}

var jugos = {ingrediente1: "fresa", ingrediente2:"banano", ingrediente3:"guanabana"};
console.log("jugos", jugos.ingrediente2);


// Variables DOM (Document Object Model)
/* EL DOM es una estructura de objeto que genera el navegador cuando se carga un documento y se puede alterar mediante javascript para cambiar dinamicamente los contenidos y aspectos de la página
*/

var caja = document.querySelector("#caja");
console.log("caja", caja);

caja.style.width= "200px";
caja.style.height= "200px";
caja.style.background="red";


// al seleccionar todas los nodos descendientes por ejemplo

var cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas)