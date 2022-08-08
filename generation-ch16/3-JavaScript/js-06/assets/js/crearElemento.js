//CREAR UN ELEMENTO

const imagen = document.createElement('img');
console.log(imagen);

//MODIFICAR LOS ATRIBUTOS HTML DEL ELEMENTO

imagen.src = 'https://placeimg.com/200/200/animals?t=1659991118163'
imagen.alt = 'Imagenes aleatorias de animales'

//LO INSERTAMOS EN UN ELEMENTO PADRE
document.body.appendChild(imagen); //AGREGA LA IMAGEN AL FINAL DE UN TEXTO

document.body.insertAdjacentElement("afterbegin", imagen); //Se inserta arriba

document.body.insertAdjacentElement("afterend", imagen);

//FORMA CORRECTA DE INSERTAR UN ELEMENTO

//1) Se crea el elemento que contendrá la imagen en el html con un div

//2) Seleccionar el elemento padre
const padreImg = document.getElementById('padreImg');

//3) Crear elemento

const imagen2 = document.createElement('img');

//4) Modificar los atributos del elemento

imagen2.src = 'https://placeimg.com/200/200/nature';
imagen2.alt = 'Imagenes de la naturaleza';

//5)Insertar elemento

/* document.appendChild(imagen2); */


//UTILIZAR forEach para pintar datos

const frutas = ['Toronja', 'Manzana', 'Mandarina', 'Limón', 'Granada', 'Melón'];
const listaFrutas = document.getElementById('frutas');


//FORMA 1
frutas.forEach((element) => {
    const li = document.createElement('li');
    li.textContent = element
    listaFrutas.appendChild(li);
})

//FORMA 2

/* frutas.forEach((el) => {
    listaFrutas.innerHTML += '<li>${el}</li>';
});
 */