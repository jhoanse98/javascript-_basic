/*
Propiedades de la calculadora
*/

var p={
    teclas: document.querySelectorAll("#calculadora ul li"),
    accion:null,
    digito:null,
    operaciones: document.querySelector("#operaciones"),
    cantidadsigno:0,
    puntodecimal: false,
    resultado:false,
}

/*
Metodos o eventos que se realizarán en la calculadora
*/

var m={
    inicio: function(){
        for(var i=0; i<p.teclas.length; i++){
            console.log("hola pedro");
            p.teclas[i].addEventListener("click", m.operacion);
        }

        document.addEventListener("keydown", m.oprimir);
    },

    oprimir: function(tecla){
        console.log(tecla.keyCode);
        
        if(tecla.keyCode == 48){
            p.accion="numero";
            p.digito=0;
        }

        else if(tecla.keyCode == 49){
            p.accion="numero";
            p.digito=1;
        }

        else if(tecla.keyCode == 50){
            p.accion="numero";
            p.digito=2;
        }

        else if(tecla.keyCode == 51){
            p.accion="numero";
            p.digito=3;
            
        }

        else if(tecla.keyCode == 52){
            p.accion="numero";
            p.digito=4;
            
        }

        else if(tecla.keyCode == 53){
            p.accion="numero";
            p.digito=5;
            
        }

        else if(tecla.keyCode == 54){
            p.accion="numero";
            p.digito=6;
            
        }

        else if(tecla.keyCode == 55){
            p.accion="numero";
            p.digito=7;
            
        }

        else if(tecla.keyCode == 56){
            p.accion="numero";
            p.digito=8;
            
        }

        else if(tecla.keyCode == 57){
            p.accion="numero";
            p.digito=9;
            
        }

        else if(tecla.keyCode == 48){
            p.accion="numero";
            p.digito=0;
            
        }

        else if(tecla.keyCode == 187){
            p.accion="signo";
            p.digito="+";
            
        }

        else if(tecla.keyCode == 189){
            p.accion="signo";
            p.digito="-";
        }

        else if(tecla.keyCode == 88){
            p.accion="signo";
            p.digito="*";
        }

        else if(tecla.keyCode == 89){
            p.accion="signo";
            p.digito="/";
        }

        else if(tecla.keyCode == 190){
            p.accion="decimal";
            p.digito=".";
        }

        else if(tecla.keyCode == 13){
            p.accion="igual";
        }

        else if(tecla.keyCode == 8){
            m.borrar();
            p.accion="";
        }
        else{
            p.accion="";
            p.digito="";
        }
        
        m.calculadora(p.accion, p.digito);


    },

    operacion: function(tecla){
        p.accion=tecla.target.getAttribute("class");
        p.digito=tecla.target.innerHTML;
        m.calculadora(p.accion, p.digito);
    },
    
    calculadora: function(accion, digito){

        switch(accion){
            case "numero":
                p.cantidadsigno=0;
                if(p.operaciones.innerHTML==0){
                    p.operaciones.innerHTML=digito;
                }
                else{
                    if(p.resultado){
                        p.resultado=false;
                        p.operaciones.innerHTML=digito;
                        
                    }
                    else{
                        p.operaciones.innerHTML += digito;
                    }
                }
            
                break;
            
            case "signo":
                p.cantidadsigno++;
                if(p.cantidadsigno == 1){
                    p.operaciones.innerHTML += digito;
                    p.puntodecimal=false;
                    p.resultado=false;
                }
                
                break;

            case "decimal":

                if(!p.puntodecimal){
                    p.operaciones.innerHTML += digito;
                    p.puntodecimal=true;
                    p.resultado=false;
                }

                break;
                
            
            case "igual":
                
                p.operaciones.innerHTML= eval(p.operaciones.innerHTML);
                p.resultado=true;
                break;
        }

    },

    borrar: function(){
        p.operaciones.innerHTML=0;
        p.resultado=false;
    }
}

m.inicio();