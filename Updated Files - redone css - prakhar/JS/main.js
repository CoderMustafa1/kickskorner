const slideshowContainer = document.querySelector(".slideshow-container");
const content = document.querySelector(".content");
const initialContentOffset = content.offsetTop;

window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;
  const parallaxValue = scrollValue * 0.3; 

  content.style.transform = `translateY(${parallaxValue}px)`;
});

slideshowContainer.style.height = content.clientHeight + "px";

let input = document.querySelector('.input-box');
let search = document.querySelector('.search');
let clos = document.querySelector('.close-icon');


search.addEventListener('click', () => {
  inputBox.classList.add('open');
});

clos.addEventListener('click', () => {
  inputBox.classList.remove('open');
});
