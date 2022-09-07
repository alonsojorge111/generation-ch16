// sort(): PERMITE ORDENAR LOS ELEMENTOS DE UN ARREGLO CONFORME A LA CLASIFICACIÓN UNICODE

const arr = ["A", "X", "a", "W", "b" ];
arr.sort();
console.log(arr);

//PARA ORDENAR DE MANERA SECUENCIAL LOS NUMEROS

const arr3 = [5, 1231, 567, 1, 80];

arr3.sort((a, b) => a-b); //ORDENA NUMEROS DE MENOR A MAYOR- SI QUEREMOS DE MAYOR A MENOR SERIA CON b-a

console.log(arr3);

//for Each(elemento, index, arreglo) UN CICLO QUE RECORRE EN AUTOMATICO TODO EL ARREGLO

const arrNumeros = [1, 4, 6, 8, 10, 20, 30];

/* for (let i = 0; i < arrNumeros.length; i++){
    arrNumeros[i] = arrNumeros[i] *2;
}

console.log(arrNumeros); */


arrNumeros.forEach((eLemento) => console.log(eLemento *= 2));



