/* --------- CINEMATIC SLIDER --------- */
let index = 0;
const slides = document.querySelector('.slides');

setInterval(()=>{
  if(slides){
    index = (index + 1) % slides.children.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }
},4000);

/* --------- MUSIC CONTROL --------- */
const music = document.getElementById("bg-music");
function toggleMusic(){
  if(music.paused){
    music.play();
  }else{
    music.pause();
  }
}