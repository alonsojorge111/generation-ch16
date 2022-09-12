//MANEJADOR DE EVENTOS
function saludar() {
    alert('Hola')
}

//addeventListener()

const boton = document.getElementById('boton');
console.log(boton);

boton.addEventListener('click', (evento) => {
    alert('holax3')
});


//GUARDAR INFOMACIÓN ENVIADA EN UN FORMULARIO

const formulario = document.getElementById('form');
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log(formulario[0].value);

})

