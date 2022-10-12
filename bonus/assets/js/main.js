/* Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato. */


const slidesContainer = document.querySelector('.active-img');
const thumbsContainer = document.querySelector('.thumbs')
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

// creazione delle thumb
for(let i = 0; i < linkArray.length; i++){
    let thumbEl = `<div class= "thumb ${i == currentIndex ? 'active' : ''}"><div class= "layover"></div><img src="${linkArray[i]}"></div>`
    nextButton.insertAdjacentHTML("beforebegin", thumbEl);

}

nextButton.addEventListener('click', ()=>{
    const images = document.querySelectorAll('.active-img > img');
    const thumbs = document.querySelectorAll('.thumb')
    console.log(thumbs);
    if(currentIndex > 4){
        console.log(currentIndex)
        currentIndex = 3;
        
    }
    thumbs[currentIndex].classList.remove('active');
    images[currentIndex].classList.remove('active');
    currentIndex++;  
    if(currentIndex > 4){
        console.log(currentIndex)
        currentIndex = 0;
        
    }
    console.log(currentIndex) 
    thumbs[currentIndex].classList.add('active'); 
    images[currentIndex].classList.add('active');
    
    
    

});


prevButton.addEventListener('click', ()=>{
    const images = document.querySelectorAll('.active-img > img');
    const thumbs = document.querySelectorAll('.thumb');
    console.log(thumbs);
    thumbs[currentIndex].classList.remove('active');
    images[currentIndex].classList.remove('active');
    currentIndex--;
    if(currentIndex < 0){
        console.log(currentIndex)
        currentIndex = 4;
        
    }
    thumbs[currentIndex].classList.add('active');
    images[currentIndex].classList.add('active');
    

});






