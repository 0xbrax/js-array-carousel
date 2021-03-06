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



console.log(`INFO: Possibilit√† di cliccare sui singoli thumb e scorrimento infinito attraverso le frecce della tastiera o cliccando sui bottoni.`)

const arrowUp = document.getElementById('arrow-up');
const arrowDown = document.getElementById('arrow-down');
let imgMain = document.querySelectorAll('.item-img');
let imgSec = document.querySelectorAll('.sec-img');

let imgSelected = [0, 1, 2, 3, 4];
const imgThumb = document.getElementsByClassName('sec-img');
let clicked;

for (let n = 0; n < imgThumb.length; n++) {
    imgThumb[n].addEventListener('click', 
    function() {
        clicked = parseInt([n]);

        for (let i = 0; i < imgSelected.length; i++) {
            imgSelected = parseInt([i]);
        }

        imgMain[imgSelected].classList.remove('show');
        imgSec[imgSelected].classList.remove('active');
        imgMain[imgSelected].classList.add('no-show');

        if (clicked == 0) {
            imgMain[0].classList.add('show');
            imgSec[0].classList.add('active');
            imgMain[0].classList.remove('no-show');

        } else if (clicked == 1) {
            imgMain[1].classList.add('show');
            imgSec[1].classList.add('active');
            imgMain[1].classList.remove('no-show');

        } else if (clicked == 2) {
            imgMain[2].classList.add('show');
            imgSec[2].classList.add('active');
            imgMain[2].classList.remove('no-show');

        } else if (clicked == 3) {
            imgMain[3].classList.add('show');
            imgSec[3].classList.add('active');
            imgMain[3].classList.remove('no-show');

        } else if (clicked == 4) {
            imgMain[4].classList.add('show');
            imgSec[4].classList.add('active');
            imgMain[4].classList.remove('no-show');
        }

        imgSelected = clicked;
    });
}

arrowDown.addEventListener('click', 
function() {
    keybtnDown();
});

arrowUp.addEventListener('click', 
function() {
    keybtnUp();
});

document.querySelector("body").addEventListener("keydown", 
function(event) {
    switch (event.key) {
        case "ArrowDown":
            keybtnDown();
        break;

        case "ArrowUp":
            keybtnUp();
        break;
    }
});



function keybtnDown() {
    for (let i = 0; i < imgSelected.length; i++) {
        imgSelected = parseInt([i]);
    }

    imgMain[imgSelected].classList.remove('show');
    imgSec[imgSelected].classList.remove('active');
    imgMain[imgSelected].classList.add('no-show');

    if (imgSelected == img.length - 1) {
        imgSelected = 0;

    } else if (imgSelected >= 0) {
        imgSelected++;
    }

    imgMain[imgSelected].classList.remove('no-show');
    imgMain[imgSelected].classList.add('show');
    imgSec[imgSelected].classList.add('active');
}

function keybtnUp() {
    for (let i = 0; i < imgSelected.length; i++) {
        imgSelected = parseInt([i]);
    }

    imgMain[imgSelected].classList.remove('show');
    imgSec[imgSelected].classList.remove('active');
    imgMain[imgSelected].classList.add('no-show');

    if (imgSelected == 0) {
        imgSelected = img.length - 1;

    } else if (imgSelected > 0) {
        imgSelected--;
    }

    imgMain[imgSelected].classList.remove('no-show');
    imgMain[imgSelected].classList.add('show');
    imgSec[imgSelected].classList.add('active');
}