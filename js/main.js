const img = [
    'img/01.jpg', 
    'img/02.jpg', 
    'img/03.jpg', 
    'img/04.jpg', 
    'img/05.jpg', 
];

let items = document.querySelector('.items');
let thumb = document.querySelector('.thumb');

items.innerHTML = `<div class="item-img show"><img class="main-img" src="${img[0]}"></div>`;
for (let i = 1; i < img.length; i++) {
    items.innerHTML += `<div class="item-img"><img class="main-img" src="${img[i]}"></div>`;
}

thumb.innerHTML += `<div class="thumb-img"><img class="sec-img active" src="${img[0]}"></div>`;
for (let i = 1; i < img.length; i++) {
    thumb.innerHTML += `<div class="thumb-img"><img class="sec-img" src="${img[i]}"></div>`;
}

thumb.innerHTML += `<div id="arrow-up"><i class="fa-solid fa-circle-chevron-up"></i></div>`;
thumb.innerHTML += `<div id="arrow-down"><i class="fa-solid fa-circle-chevron-down"></i></div>`;



const arrowUp = document.getElementById('arrow-up');
const arrowDown = document.getElementById('arrow-down');
let imgMain = document.getElementsByClassName('item-img');
let imgSec = document.querySelectorAll('.sec-img');

let imgSelected = 0;

arrowDown.addEventListener('click', function() {
    if (imgSelected == img.length - 1) {
        imgMain[imgSelected].classList.remove('show');
        imgSec[imgSelected].classList.remove('active');
        imgSelected = 0;
    } else if (imgSelected >= 0) {
        imgMain[imgSelected].classList.remove('show');
        imgSec[imgSelected].classList.remove('active');
        imgSelected++;
    }

    imgMain[imgSelected].classList.add('show');
    imgSec[imgSelected].classList.add('active');
});

arrowUp.addEventListener('click', function() {
    if (imgSelected == 0) {
        imgMain[imgSelected].classList.remove('show');
        imgSec[imgSelected].classList.remove('active');
        imgSelected = img.length - 1;
    } else if (imgSelected > 0) {
        imgMain[imgSelected].classList.remove('show');
        imgSec[imgSelected].classList.remove('active');
        imgSelected--;
    }

    imgMain[imgSelected].classList.add('show');
    imgSec[imgSelected].classList.add('active');
});