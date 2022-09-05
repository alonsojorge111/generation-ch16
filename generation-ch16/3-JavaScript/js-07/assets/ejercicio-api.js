/*  
    Instrucciones:

    * Utilizar la API cat
        - https://api.thecatapi.com/v1/images/search

    * Con un boton se debe mostrar una imagen de un gato
    * Que las imagenes tengan un tamaño de 600x400 sin deformar la imagen

    Nota:
    Cuidado con el tipo de dato que se recibe

*/


// URL PARA CONSUMIR

const urlGato= "https://api.thecatapi.com/v1/images/search"

//ELEMENTOS PARA CONSUMIR

const imagenGatito = document.getElementById(("img-gatito"));
const btn = document.getElementById(("btn-gatito"));
console.log(btn);

//EVENTOS

btn.addEventListener("click", () =>{
    console.log("Boton presionado");
})

//CREAR FUNCION
async function obtenerGatos (url){
    const datos = urlGato
    console.log(datos);
}





