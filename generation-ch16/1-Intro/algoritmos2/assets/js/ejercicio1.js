const personas = ["María", "Daniel", "Luis", "Juan", "Camila"];
console.log(personas);

//Escribe un comando para remover a "Dani" del arreglo

personas.splice(1,1);
console.log(personas);

//Escribe un comando para remover a "Juan del arreglo
personas.splice(2,1);
console.log(personas);

//Escribe un comando para agregar a "Luis" al inicio del arreglo
personas.splice(1,1);
personas.unshift("Luis");
console.log(personas);

//Escribe el comando para agregar tu nombre al final del arreglo
personas.push("Jorge");
console.log(personas);

//Escribe el comando para mostrar la posición de "Maria"
pos_maria = personas.indexOf("María");
console.log(pos_maria);

//Escribe el comando para mostrar la posición de tu nombre
pos_jorge = personas.indexOf("Jorge");
console.log(pos_jorge);

//ARREGLO MULTIDIMENSIONAL
const newArr = [1, 45, "Hola", "Adios", true, null, [30, 31, 32], ["Azul", "Amarillo","Verde"]]
console.log(newArr[6][0]);
console.log(newArr[7][1]);

//OBJETOS: Nos permiten guardar pares de valores. Nos ordena alfabeticamente los key
//key - value
const obj = {
    nombre : "Pedro", 
    edad : 25,
    color : "Azul",
    hobbie : ["Leer" , "Correr"],
    newArr : newArr
};

console.log(obj.edad);
console.log(obj.hobbie[1]);
