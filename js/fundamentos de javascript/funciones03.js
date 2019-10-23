

//declaracion de funciones 

function saludo(){
    console.log("hola");
}

//llamado de funcion
saludo();

//declaracion de funcion con parámetros

function suma(digito1, digito2){
    var resultado= digito1 + digito2;
    console.log("resultado es "+resultado);
}

suma(5,7);
suma(10,21);

//declaracion de funciones con retorno sin parametro

function numeritos(){
    var numero=5;
    return numero;
}

console.log(numeritos());

//declaracion de funciones de retorno con parametros

function retorno(numero){
    return numero;
}

console.log(retorno("mamá"));
