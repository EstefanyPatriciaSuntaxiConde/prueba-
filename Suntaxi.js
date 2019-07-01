//1. Declarar un array vacio de nombre de amigos 
var amigos=[]

//2. Insertar los tres objetos (Hugo, Paco y Luis) en el array de amigos 

var hugo={
    nombre: "hugo",
    cuidad:"Quito",
    edad: 16
}

var paco={
    nombre: "paco",
    cuidad:"Cuenca",
    edad: 17
}

var luis={
    nombre: "luis",
    cuidad:"Guayaquil",
    edad: 21
}

//3. Imprimir en consola la longitud del array amigos.

amigos.push(hugo.edad, hugo.cuidad, hugo.nombre);
amigos.push(paco.edad, paco.cuidad, paco.nombre);
amigos.push(luis.edad, luis.cuidad, luis.nombre);
amigos.length
numeroDeAmigos += amigos.length;

//4. Crear un nuevo objeto de nombre Elena (con los mismos tres atributos de los objetos iniciales: nombre, edad, ciudad)
var elena={
    nombre: "Elena",
    ciudad: "Cuenca",
    edad: 15
}
amigos.push(hugo.edad, hugo.cuidad, hugo.nombre);
amigos.push(paco.edad, paco.cuidad, paco.nombre);
amigos.push(luis.edad, luis.cuidad, luis.nombre);
console.log(amigos.length);

//5. Declarar una variable numeroDeAmigos y guardar el número de elementos que tiene el array (usando la propiedad que devuelve el número de elementos de un array).
var numeroDeAmigos;

//6. Hacer una función que se llame saludo, la función recibe como parámetro un objeto,  si la edad es par: imprime en consola “Saluton kaj bonvenon”.  Cuando la edad es impar imprime en consola “Hello moto”.

var saludo=function(edad){
    if(edad % 2 === 0){
        console.log("Saluton kaj bonvenon");
    }else {
        console.log("“Hello moto”")
       } 
 }

//7. Hacer una función de nombre arriba  que recibe un objeto por parámetro e imprime en consola desde el uno, de manera ascendente hasta el atributo edad del objeto recibido como parámetro.

var arriba = function (edad){
    if (edad === 1){
        console.log (1);
    }else{
        arriba(edad-1);
        console.log(edad);
    }
}

//8. Hacer una función de nombre abajo  que recibe un objeto por parámetro e imprime en consola desde la edad del objeto hasta cero, de manera descendente.

var abajo=function (edad){
    if(edad===0){
        console.log(0);
    }else{
        console.log(edad);
        abajo(edad-1);
    }
}

//9. Hacer una función de nombre edadTotal que recibe cuatro objetos como parámetros y escribe en pantalla la suma de las edades de los cuatro objetos recibidos.

var a = luis.edad;
var b = hugo.edad;
var c=paco.edad;
var d= elena.edad;
var suma1;
var edadTotal= function(edad,edad,edad,edad){  
suma1=edad+edad+edad+edad
console.log(suma1);
}
