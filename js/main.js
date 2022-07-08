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

for (let i = 0; i < img.length; i++) {
    thumb.innerHTML += `<div class="thumb-img"><img class="sec-img" src="${img[i]}"></div>`;
}

thumb.innerHTML += `<div id="arrow-up"><i class="fa-solid fa-circle-chevron-up"></i></div>`;
thumb.innerHTML += `<div id="arrow-down"><i class="fa-solid fa-circle-chevron-down"></i></div>`;



