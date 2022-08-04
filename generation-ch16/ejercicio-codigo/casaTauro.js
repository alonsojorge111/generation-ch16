/* CASA DE TAURO */

let carreritas = ["Lucia", "Roberto", "Maria", "Jesus", "Andrea", "Jose"];
console.log(carreritas);

//A) Andrea adelanta a Maria

carreritas.splice(2, 0, "Andrea");
carreritas.splice(5, 1);
console.log(carreritas);

//B) Jose es descalificado de la carrera

carreritas.pop();
console.log(carreritas);

//C) Detrás de Lucia y antes de Roberto se clasifican tres nuevos corredores: Cristobal, Fernanda y Armando

carreritas.splice(1, 0, "Cristobal", "Fernanda", "Armando");
console.log(carreritas);

//D) Hay un nuevo concursante que toma primer puesto: Federico

carreritas.unshift("Federico");
console.log(carreritas);