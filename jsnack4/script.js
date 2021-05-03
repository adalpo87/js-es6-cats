/* Esercizio (array, oggetti, map, interpolazione delle stringhe)
Crea un array di oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un’età.
Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
Es:
[
	{ nome: ‘Mario’, cognome: ‘Rossi’, eta: 60 },
	{ nome: ‘Luigi’, cognome: ‘Verdi’, eta: 12 },
	{ nome: ‘Silvia’, cognome: ‘Neri’, eta: 25 },
]
[
	‘Mario Rossi può guidare’,
	‘Luigi Verdi non può guidare’,
	‘Silvia Neri può guidare’,
] */

$(function(){

const arrayPersone = [
    {
        nome: 'Mario',
        cognome: 'Rossi',
        anni: 20
    },
    {
        nome: 'Francesco',
        cognome: 'Verdi',
        anni: 8
    },
    {
        nome: 'Alessandro',
        cognome: 'Costa',
        anni: 39
    },
    {
        nome: 'Valerio',
        cognome: 'Baggio',
        anni: 10
    },
    {
        nome: 'Nicola',
        cognome: 'Neri',
        anni: 21
    },
    {
        nome: 'Simone',
        cognome: 'Battaglia',
        anni: 27
    },
    {
        nome: 'Stefano',
        cognome: 'Baccini',
        anni: 13
    }
]

let targetHtml = '.patentati ul';

arrayPersone.forEach((persona)=>{
    print(persona.nome, persona.cognome, persona.anni, targetHtml);
})



//funzione 

function print(nome, cognome, anni, target){
    let HTML = '';
    if(anni < 18){
        HTML = `<li>${nome} ${cognome} ha ${anni} anni e quindi non puo' guidare.</li>`
    }else{
        HTML = `<li>${nome} ${cognome} ha ${anni} anni e quindi puo' guidare.</li>`
    }

    $(target).append(HTML);
}


})