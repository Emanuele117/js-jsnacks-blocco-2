//Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

const biciPiuLeggera = document.querySelector('.bici_leggera')


const bici = [
    {
        nome: 'Pinarello Dogma F10',
        peso: 820
    },

    {
        nome: ' Bottecchia T1 Endurance',
        peso: 1180
    },

    {
        nome: 'cannondale',
        peso: 500
    }

]


let biciLeggera = bici[0]

for (let i = 0; i < bici.length; i++) {

    const bike = bici[i];


    if (bike.peso < biciLeggera.peso) {
        biciLeggera = bici
    }


}


