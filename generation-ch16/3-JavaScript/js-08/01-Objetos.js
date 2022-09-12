let personaObjeto = {
  nombre: "Carlos",
  edad: 27,
  correo: "correo@example.com",
  idioma:'español',
  get leng (){
    return this.idioma.toUpperCase();
  },
  set leng2 (lang){
    this.idioma = lang.toLocaleLowerCase();
  }
  
};

console.log(personaObjeto.leng);
personaObjeto.lang ='ESPAÑOL'
console.log(personaObjeto.idioma);

console.log(personaObjeto);
console.log(personaObjeto.nombre);
console.log(personaObjeto.edad);
console.log(personaObjeto.correo);

let personaObjeto2 = new Object();
personaObjeto2.nombre = "Jorge";
personaObjeto2.edad = 26;
personaObjeto2.correo = "alonsojorge111@gmail.com";

console.log(personaObjeto2.nombre);
console.log(personaObjeto2.edad);
console.log(personaObjeto2.correo);


/* EN FUNCIONES SE DEBE DECOLOCAR UN THIS */

//CAMBIAR ATRIBUTO A UN OBJETO

personaObjeto.tel = '5578114018';
personaObjeto.tel = '5512353944';
console.log(personaObjeto.tel);

//RECORRER ELEMENTOS DE LOS ATRIBUTOS DE UN OBJETO

for (varPropiedad in personaObjeto){
    console.log(personaObjeto[varPropiedad]);
}

//JSON

let personaString = JSON.stringify(personaObjeto);
console.log(personaString);

//con get puedes acceder a la funcion fuera del objeto
//set recibe y no tiene return


