
/* LOS 4 ATLETAS

De 4 corredores atletas se sabe que C ha llegado inmediatamente detras de B, y D ha llegado en medio de A y C. ¿Podria calcular el orden de llegada?

*/


var a = {
    A:0,
    B:0,
    C:0,
    D:0,

    resultado: function(){
        if(a.B < a.C && a.D < a.A && a.D > a.C){
            return true;
        }
        return false;
    },

    intervalo: setInterval(function(){

        a.A = Math.ceil(Math.random()*4)
        a.B = Math.ceil(Math.random()*4)
        a.C = Math.ceil(Math.random()*4)
        a.D = Math.ceil(Math.random()*4)

        if(a.resultado()){

            clearInterval(a.intervalo);
            console.log("A ", a.A),
            console.log("B ", a.B),
            console.log("C ", a.C),
            console.log("D ", a.D)
        }

    }, 10) 
}


/* =================================================
CASO 2. CABALLOS

El caballo de Mac es más oscuro que el de Smith, pero más rápido y más viejo que el de Jack, que es aún mas lento que el de Willy, que es más jóven que el de Mac, que es más viejo que el de Smith, que es mas claro que el de Willy, aunque el de Jack es más lento y más oscuro que el de Smith. ¿Cuál es el más viejo, cuál el mas lento y cuál el más claro?

=================================================*/






var b ={

    mac: {color:0, edad:0, veloz:0},
    smith: {color:0, edad:0, veloz:0},
    jack: {color:0, edad:0, veloz:0},
    willy: {color:0, edad:0, veloz:0},
    
    
    condicion: function(){

        console.log(b.mac.color);
        
        if(
            b.mac.color > b.smith.color && 
            b.mac.edad > b.jack.edad && 
            b.mac.veloz > b.jack.veloz && 
            b.jack.veloz < b.willy.veloz &&
            b.willy.edad < b.mac.edad && 
            b.mac.edad > b.smith.edad &&
            b.smith.color < b.willy.color &&
            b.jack.veloz < b.smith.veloz && 
            b.jack.color > b.smith.color 
            ){
                return true;
            }
            else{
                console.log("hijos de putaaaaa")
                return false;
            }
    },

    

    intervalo: setInterval(function(){

        b.mac.veloz=Math.ceil(Math.random()*2);
        b.mac.edad=Math.ceil(Math.random()*2);
        b.mac.color=Math.ceil(Math.random()*2);

        b.smith.veloz=Math.ceil(Math.random()*2);
        b.smith.edad=Math.ceil(Math.random()*2);
        b.smith.color=Math.ceil(Math.random()*2);

        b.jack.veloz=Math.ceil(Math.random()*2);
        b.jack.edad=Math.ceil(Math.random()*2);
        b.jack.color=Math.ceil(Math.random()*2);

        b.willy.veloz=Math.ceil(Math.random()*2);
        b.willy.edad=Math.ceil(Math.random()*2);
        b.willy.color=Math.ceil(Math.random()*2);

        if(b.condicion()){
            clearInterval(b.intervalo);
            console.log("mac", b.mac);
            console.log("smith", b.smith);
            console.log("jack", b.jack);
            console.log("willy", b.willy);
        }
    }, 1)
}

