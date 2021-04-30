/* 
Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è 
caratterizzato da: nome, età, colore e sesso.

Tramite la funzione .forEach(), stampare in pagina tutti i gattini, 
ciascuno con il proprio colore e il proprio nome.

Milestone 2
Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni
gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio.
Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

Milestone 3
Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio,
 inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto.
*/

$(function(){


const cats = [
    {
        name: 'Fuffi',
        age: 1,
        colour: '#550015',
        gender: 'male'
    },
    {
        name: 'Mia',
        age: 0.7,
        colour: '#E5E0FF',
        gender: 'female'
    },
    {
        name: 'Grisù',
        age: 2,
        colour: '#001727',
        gender: 'male'
    },
    {
        name: 'Viola',
        age: 3,
        colour: '#220037',
        gender: 'female'
    },
    {
        name: 'Tigre',
        age: 5,
        colour: '#D7FFC0',
        gender: 'male'
    },
];


cats.forEach((cat) => {
    $('#mailes-1 ul').append(textGenerator(cat.name, cat.colour));
});


console.log(cats);


/* FUNZIONI */
function textGenerator(nomeGatto, coloreGatto){

    let html = `
      <li>
        <i class="fas fa-cat" style="color:${coloreGatto}"></i>
        <span>${nomeGatto}</span>
      </li>   
    `;
    return html;
}
})