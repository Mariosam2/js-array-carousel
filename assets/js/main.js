/* Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato. */


const slidesContainer = document.querySelector('.col.active-img');
const nextButton = document.querySelector('.next');

// array percorso immagini
const linkArray = [
    '../assets/img/01.webp',
    '../assets/img/02.webp',
    '../assets/img/03.webp',
    '../assets/img/04.webp',
    '../assets/img/05.webp',
]

// contatore immagine corrente
let currentImg = 0;

// creazione degli elementi img e set dell'active img
for(let i = 0; i < linkArray.length; i++){
    let imgEl = document.createElement('img');
    imgEl.src = linkArray[i];
    slidesContainer.prepend(imgEl);
    if(i == currentImg) {
        console.log(imgEl)
        imgEl.classList.add('active');
    } else {
        imgEl.classList.remove('active');
    }

}

nextButton.addEventListener('click', ()=>{
    console.log('click');
    currentImg++;
    console.log(currentImg);

});


