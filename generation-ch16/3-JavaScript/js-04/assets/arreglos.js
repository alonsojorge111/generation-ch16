/* ARREGLOS: COLECCION DE ELEMENTOS. CADA ELEMENTO OCUPA UNA POSICIÓN. ESA POSICIÓN SE CONOCE COMO INDICE Y SE COMIENZA DESDE EL 0 */

let arr = [1,2,3,4];
console.log(arr);

/* LAS PROPIEDADES DESCRIBEN A LOS OBJETOS. LOS METODOS SON LAS ACCIONES QUE PUEDEN REALIZAR */

console.log(arr[2]);

/* ARREGLAR UN ELEMENTO AL ARRAY */

arr[4] = 190;
arr[4] = "Hola"
console.log(arr);

/* METODOS DE ARREGLOS */

const arreglo = [ "Adiós" ];

//PUSH

let num = 500;
arreglo.push(2);
console.log(arreglo);
arreglo.push(false);
console.log(arreglo);
arreglo.push(num);
console.log(arreglo);

//UNSHIFT

arreglo.unshift("A");
arreglo.unshift("B");
console.log(arreglo);

// POP: GUARDA EL ELEMENTO QUE ELIMINASTE

arreglo.pop()
console.log(arreglo);

//SHIFT

arreglo.shift();
console.log(arreglo);

//SPLICE

arreglo.splice(1,2,"Parangaricutirimicuaro", 568980)
console.log(arreglo);

//SLICE: VA A DEJAR SOLO EL RANGO QUE COLOQUEMOS EL SLICE

let dato3 = arreglo.slice (0,3);
console.log(arreglo);
console.log(dato3);