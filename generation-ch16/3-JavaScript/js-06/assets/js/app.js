//console.log(document.URL);

//getElementById();

console.log(document.getElementById("parrafo1"));

const parrafo1 = document.getElementById("parrafo1")

console.log(parrafo1.textContent);

parrafo1.textContent = "Hola desde el párrafo 1";
console.log(parrafo1.textContent);

parrafo1.style.color = "red";
parrafo1.style.background = "yellow";

//SELECIONAR VARIOS ELEMENTOS AL MISMO TIEMPO

//querySelector();

//etiqueta = p
//clase = .parrafo
//id = #parrafo

const parrafo2 = document.querySelector(".parrafo");
console.log(parrafo2);


parrafo2.textContent = "Modificando el cotenido desde JavaScript"

//querySelectorAll;

const parrafos = document.querySelectorAll("p");
console.log(parrafos[2]);

parrafos[2].style.fontSize = "2rem"

//MODIFICAR LOS ATRIBUTOS DE HTML

const enlace = document.getElementById("enlace")
console.log(enlace);

enlace.href = "https://www.youtube.com.mx/";
enlace.target = "_blank";
enlace.textContent = "Enlace de Youtube";

/* ACTIVIDAD */

const parrafox = document.getElementById("parrafox");
console.log(parrafox);

parrafox.textContent = ("Hola mundo");

parrafox.style.color = "blue";
parrafox.style.backgroundColor = "red"



const parrafoy = document.querySelector(".parrafoy");
console.log(parrafoy);

parrafoy.style.fontSize = "2rem";
parrafoy.style.backgroundColor = "green";

/* REEMPLAZAR CONTENIDO */

//innerHTML: Muesta el html que haya en el interior del elemento

const parrafo4 = document.getElementById("parrafo4")
console.log(parrafo4.innerHTML);

//outerHTML: Muestra el html, incluyendo al elemento

console.log(parrafo4.outerHTML);

/* parrafo4.outerHTML = '<a href="http://google.com/">Enlace</a>'; REEMPLAZA EL ELEMENTO COMPLETO 

/* parrafo4.inner.HTML = '<a href="http://google.com/">Enlace</a>'; CONSERVA EL ELEMENTO PERO LO REEMPLAZA POR DENTRO. ESTE SE USA MÁS*/

/* parrafo4.outerHTML = '<div class="elemento"> Este es un div </div>' */

// JS PERMITE MODIFICAR LAS CLASES CSS. UTILIZANDO STYLE

console.log(parrafo4.classList.contains("elemento"));
parrafo4.classList.add('elemento');

const cambiaColor = () => {
    parrafo4.classList
}



