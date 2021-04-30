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
        age: 6,
        color: '#550015',
        gender: 'male'
    },
    {
        name: 'Mia',
        age: 3.7,
        color: '#E5E0FF',
        gender: 'female'
    },
    {
        name: 'Grisù',
        age: 2,
        color: '#001727',
        gender: 'male'
    },
    {
        name: 'Viola',
        age: 3,
        color: '#220037',
        gender: 'female'
    },
    {
        name: 'Tigre',
        age: 5,
        color: '#D7FFC0',
        gender: 'male'
    },
];


cats.forEach((cat) => {
    $('#mailes-1 ul').append(textGenerator(cat.name, cat.color));
});





/* Milestone 2
Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni
gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio.
Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
 */

//proprietà style che devono essere inserite nel fiocco
const pink = '#BB0048';
const blue = '#00024F';

//creiamo un nuovo array che aggiunge a tutti i gatti il ribbon, e lo facciamo tramite map

const newArrayCats = cats.map((cat) => {
    
    let color = (cat.gender ==='female') ? pink : blue
    let opacity = cat.age / 10;
    //ci deve tornare un array uguale con l aggiunta di ribbon
    return{
        ...cat,
        ribbon:{
            color,
            opacity
        }

    }
})

//creato array di gatti femmina
const femaleCats = newArrayCats.filter((cat)=>{
    if(cat.gender === 'female'){
        return cat;
    }
})

//creato array di gatti maschio
const maleCats = newArrayCats.filter((cat)=> cat.gender === 'male');




//tramite foreach e append li trasferiamo nel html
maleCats.forEach((cat)=>{
    $('#mailes-2-male ul').append(textGenerator(cat.name, cat.color, cat.ribbon.color, cat.ribbon.opacity));
})

femaleCats.forEach((cat)=>{
    $('#mailes-2-female ul').append(textGenerator(cat.name, cat.color, cat.ribbon.color, cat.ribbon.opacity));
})
console.log(femaleCats);

/* Milestone 3
Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio,
 inserendo solamente nome, colore e opacità del fiocco per ogni gatto. */

const orderedCats = [...femaleCats, ...maleCats];
console.log(orderedCats);

orderedCats.forEach((cat)=>{

    $('#mailes-3 ul').append(textGenerator(cat.name, cat.color, cat.ribbon.color ,cat.ribbon.opacity));

})







/* FUNZIONI */

function textGenerator(nomeGatto, coloreGatto, ...ribbon){
//aggiunto parte per il ribbon
    let tag = '';
    if(ribbon.length > 0){
        tag = `
             <i class="fas fa-ribbon"
                style="color:${ribbon[0]};
                        opacity:${ribbon[1]}"></i>
        `
    }

    let html = `
      <li>
        <i class="fas fa-cat" style="color:${coloreGatto}"></i>
        <span>${nomeGatto}</span>
        ${tag}
      </li>   
    `;
    return html;
}

})

