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
let infinite = (currentIndex + 4) % 5 ;

// creazione degli elementi img e set dell'active img
for(let i = 0; i < linkArray.length; i++){
    let imgEl = `<img class="${i == currentIndex ? 'active' : ''}" src="${linkArray[i]}">`
    slidesContainer.insertAdjacentHTML("beforeend", imgEl);

}

nextButton.addEventListener('click', ()=>{
    const images = document.querySelectorAll('.active-img > img');
    images[infinite].classList.remove('active');
    console.log(currentIndex);
    console.log(infinite);
    currentIndex++;
    infinite = (currentIndex + 4) % 5;
    images[infinite].classList.add('active');
    

});


prevButton.addEventListener('click', ()=>{
    const images = document.querySelectorAll('.active-img > img');
    images[currentIndex].classList.remove('active');
   
    console.log(infinite);
    currentIndex--;
    infinite = Math.abs(linkArray.length - currentIndex) % 5;
    images[infinite].classList.add('active');
    

});






