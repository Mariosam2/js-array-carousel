/* Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato. */


const slidesContainer = document.querySelector('.active-img');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

// array percorso immagini
const linkArray = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp',
]

// contatore immagine corrente
let currentIndex = 0;

// creazione degli elementi img e set dell'active img
for(let i = 0; i < linkArray.length; i++){
    let imgEl = `<img class="${i == currentIndex ? 'active' : ''}" src="${linkArray[i]}">`
    slidesContainer.insertAdjacentHTML("beforeend", imgEl);

}

nextButton.addEventListener('click', ()=>{
    const images = document.querySelectorAll('.active-img > img');
    images[currentIndex].classList.remove('active');
    currentIndex++;
    images[currentIndex].classList.add('active');
    

});


prevButton.addEventListener('click', ()=>{
    const images = document.querySelectorAll('.active-img > img');
    images[currentIndex].classList.remove('active');
    currentIndex--;
    images[currentIndex].classList.add('active');
    

});






