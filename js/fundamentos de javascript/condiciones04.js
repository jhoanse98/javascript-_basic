var a= 5;
var b=6;

if(a>b){
    console.log("la variable a es mayor a b");
}else if(a==b){
    console.log("la variable a y la variable b son iguales");
}else{
    console.log("la variable a no es mayor a la variable b");
}


//switch conjunto de casos 

var dia="lunes";

switch(dia){
    case "sabado":
        console.log("hoy es sabado");
        break;
    case "domingo":
        console.log("dia para descansar");
        break;
    case "martes":
        console.log("dia para proyecto de grado");
        break;
    default:
        console.log("feliz inicio de semana");
}