const images = document.querySelectorAll('.carousel img');
let imgActive = 0;
let interval;

images[imgActive].classList.add('show');
for(let i = 1; i < images.length; i+=1){
    images[i].classList.add('hidden');
};
/*// Clic bouton suivant
//document.querySelector('#next').addEventListener('click', function(){
 //   next();
});
// Clic bouton précédent
document.querySelector('#prev').addEventListener('click', function(){
    prev();
});
// Clic bouton play
document.querySelector('#play').addEventListener('click', function(){
    interval= setInterval(next, 3000);
});
// Clic bouton pause
document.querySelector('#pause').addEventListener('click', function(){
    clearInterval(interval); */
 });
// Fonction "suivant"
const next = function(){
    images[imgActive].classList.remove('show');
    images[imgActive].classList.add('hidden');
    imgActive+=1;
    if(imgActive >= images.length){
        imgActive = 0;
    }
    images[imgActive].classList.remove('hidden');
    setTimeout(() => {
        images[imgActive].classList.add('show');
    }, 300);
};
// Fonction "précédent"
const prev = function(){
    images[imgActive].classList.remove('show');
    images[imgActive].classList.add('hidden');
    imgActive-=1;
    if(imgActive < 0){
        imgActive = images.length-1;
    }
    images[imgActive].classList.remove('hidden');
    setTimeout(() => {
        images[imgActive].classList.add('show');
    }, 300);
};


















