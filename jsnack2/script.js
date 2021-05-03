/* Esercizio (map) -> si potrebbe ottimizzare con una funzione separata per il capitalize
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */


$(function(){
    
const arrayNomi = ['andrea', 'GiaNni', 'MARIO', 'simone', 'Alberto', 'LUIGI', 'Stefano', 'nicola'];


//bisogna creare un secondo array con i nomi formattati in piccolo e l iniziale in maiuscolo

const arrayLower = arrayNomi.map((nomi)=> lowerCaseLetter(nomi));

console.log(arrayLower);


const arrayUpper = arrayLower.map((nomi)=> capitalizeFirstLetter(nomi));

console.log(arrayUpper);



//funzione

function lowerCaseLetter(string) {
    return string.toLowerCase();
}

function capitalizeFirstLetter(string) {

    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

})