/* Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe. Es: 
[
	{ nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
	{ nome: ‘cane’, ’famiglia: ‘canidi’, classe: ‘mammiferi’ },
	{ nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
]
Crea un nuovo array con la lista dei mammiferi. */



$(function(){

    const arrayAnimali = [
        {
            nome: 'leone',
            famiglia: 'felidi',
            classe: 'mammiferi'
        },
        {
            nome: 'cane',
            famiglia: 'canidi',
            classe: 'mammiferi'
        },
        {
            nome: '‘gallina’',
            famiglia: 'fasianidi',
            classe: '‘uccelli’'
        },
        {
            nome: 'leone',
            famiglia: 'felidi',
            classe: 'mammiferi'
        },
        {
            nome: 'tigre',
            famiglia: 'felidi',
            classe: 'mammiferi'
        },
        {
            nome: 'leone',
            famiglia: 'felidi',
            classe: 'mammiferi'
        },
        {
            nome: '‘gallina’',
            famiglia: 'fasianidi',
            classe: '‘uccelli’'
        },
        {
            nome: 'Vipera',
            famiglia: 'Viperidae',
            classe: 'rettile'
        },
    ]

const arrayMammiferi = arrayAnimali.filter((animal)=> animal.classe === 'mammiferi');

console.log(arrayMammiferi);

})