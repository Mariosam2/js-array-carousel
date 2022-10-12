/* Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato. */


const slidesContainer = document.querySelector('.col.active-img');
const nextButton = document.querySelector('.next');

// array percorso immagini
const linkArray = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp',
]

// contatore immagine corrente
let currentIndex = 2;

// creazione degli elementi img e set dell'active img
for(let i = 0; i < linkArray.length; i++){
    let imgEl = `<img class="${i == currentIndex ? 'active' : ''}" src="${linkArray[i]}">`
    console.log(imgEl)
    slidesContainer.insertAdjacentHTML("afterbegin", imgEl);

}

nextButton.addEventListener('click', ()=>{
    console.log('click');
    currentIndex++;
    

});


