const img = document.getElementById('imgs');
const next = document.getElementById('next');
const back = document.getElementById('back');
const slider = document.getElementById('slider');

let images = [
    'images/fox.jpg',
    'images/fish.jpg',
    'images/pug.jpg',
    'images/cat.jpg',
    'images/lion.jpg',
    'images/cutecat.jpg',
    'images/dogs.jpg',
]

let currentIndex = 0;
img.src = images[0];

slider.innerText = `${currentIndex+1}/ ${images.length}`;

back.addEventListener('click',()=>{
    if(currentIndex >0){
        currentIndex--;
    } else{
        currentIndex = images.length - 1;
    }
    img.src = images[currentIndex];
    slider.innerText = `${currentIndex+1}/${images.length}`;
});

next.addEventListener('click',()=>{
    if(currentIndex < images.length-1){
        currentIndex++;
    } else{
        currentIndex = 0;
    }
    img.src = images[currentIndex];
    slider.innerText = `${currentIndex+1}/${images.length}`;
});
setInterval(()=>{
    if(currentIndex < images.length-1){
        currentIndex++;
    } else{
        currentIndex = 0;
    }
    img.src = images[currentIndex];
    slider.innerText = `${currentIndex+1}/${images.length}`;
}, 3000);




