'use strict'

/* URL PARA CONSUMIR */

const urlAleatorios = "https://dog.ceo/api/breeds/image/random"

/* ELEMENTOS PARA CONSUMIR */

const imagenPerrito = document.getElementById("img-perrito");

const btn = document.getElementById("btn-perrito");
console.log(btn);

//EVENTOS
btn.addEventListener("click", () =>{
    console.log("Boton presionado");
    obtenerPerritoAleatorio(urlAleatorios)

})


async function obtenerPerritoAleatorio(url) {
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    console.log(datos.message);
    console.log(datos.status);

    imagenPerrito.src = datos.message

}

obtenerPerritoAleatorio(urlAleatorios)