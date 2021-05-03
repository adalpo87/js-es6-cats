/* Crea un array composto da 10 oggetti che rappresentano un’automobile.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: inserisci nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */

$(function(){

    const auto = [
        {
            marca: 'fiat',
            modello: 'panda',
            alimentazione: 'benzina'
        },
        {
            marca: 'volkswagen',
            modello: 'panda',
            alimentazione: 'diesel'
        },
        {
            marca: 'fiat',
            modello: 'punto',
            alimentazione: 'diesel'
        },
        {
            marca: 'opel',
            modello: 'corsa',
            alimentazione: 'diesel'
        },
        {
            marca: 'volkswagen',
            modello: 'panda',
            alimentazione: 'diesel'
        },
        {
            marca: 'fiat',
            modello: 'panda',
            alimentazione: 'benzina'
        },
        {
            marca: 'ford',
            modello: 'panda',
            alimentazione: 'diesel'
        },
        {
            marca: 'opel',
            modello: 'corsa',
            alimentazione: 'diesel'
        },
        {
            marca: 'ford',
            modello: 'panda',
            alimentazione: 'diesel'
        },
        {
            marca: 'volkswagen',
            modello: 'golf',
            alimentazione: 'metano'
        }
    ];

    const benzina = auto.filter((car)=> car.alimentazione === 'benzina');
    console.log(benzina);
    print(benzina, $('#benzina'))

    const diesel = auto.filter((car)=> car.alimentazione === 'diesel');
    console.log(diesel);
    print(diesel, $('#diesel'))

    const altro = auto.filter((car)=> car.alimentazione !== 'benzina' && car.alimentazione !== 'diesel');
    console.log(altro);
    print(altro, $('#altro'))
//FUNZIONI


function print(cars,target){
   
    cars.forEach((car)=> {
        let {marca,modello}= car;
        let html = `
        <div class="cars">
        <ul>
            
            <li>
                <h3>Marca: ${marca}</h3>
                <p>Modello: ${modello}</p>
            </li>

        </ul>

    </div>
        `

        target.append(html);

    })
}

})