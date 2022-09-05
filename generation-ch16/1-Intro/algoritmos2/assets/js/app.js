/* ARREGLOS O ARRAY
Un Array o matriz no es mas que un tipo de dato estructurado que permite guardar un conjunto de datos ordenado.
A cada dato se le asigna un indice que indica su posicion numérica dentro dela arrar.
Una variable puede tener mas de un elemento
*/

/*CREAR ARREGLOS
//let num = [];
//console.log(num);

//El indice es la posición en los arreglos

//const arr = [1,2,3,4,5];
// Llamar un elemento console.log(arr[0]);
// Llamar a todo el arreglo consule.log(arr);

// Para agregar un nuevo valor o sustituirlo

arr[5] = 25;
arr[8] = 8
console.log(arr);

// Propiedades de los arreglos: Descripcion del arreglo

console.log(arr.length); //NUMERO DE ELEMENTOS DEL ARREGLO

//Metodos: Acciones que puede realizar un arreglo. SIEMPRE LLEVAN PARENTESIS
*/

const frutas = ["Manzana", "Platano"];
console.log(frutas);

//Método push: Agrega un valor al final del arreglo
let fruta = "Toronja"
frutas.push("Naranjas");
frutas.push(fruta);
console.log(frutas);

//Método pop: Elimina el ultima elemento del arreglo
frutas.pop();
console.log(frutas);

let elemento_borrado = frutas.pop(); //Para ver que elemento se borra con el metodo pop
console.log(elemento_borrado);

//METODO UNSHIFT: AGREGA VALOR AL INICIO Y REGRESA LA LONGITUD DEL ARRAY
let elemento_inicio = frutas.unshift("Uva");
console.log(frutas);
console.log(elemento_inicio);

//METODO SHIFT : ELIMINA EL ELEMENTO DEL INICIO DEL ARREGLO
frutas.shift();
console.log(frutas);

