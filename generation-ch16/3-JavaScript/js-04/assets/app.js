/* CICLO FOR: CICLO CONTROLADO */

for ( let i = 1; i < 6; i++){
    console.log(i);
}

/* CICLO WHILE */

let control =0;

while (control < 5) {
    console.log("while: " + control);
    control++;
}


/* CICLO DO WHILE */

let numero = 0;
do{
    console.log("Do...While: " + numero);
    numero++;
}while(numero < 5 );


/* FOR ANIDADO */

for(let i =0; i < 5; i++){
    console.log("for principal" + i);
    for(let j = 0; j < i; j++){
        console.log("for interno" + j);
    }
}

var codPostal = 28001;
14002 = codPostal;
console.log(codPostal);