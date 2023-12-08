// $(document).ready(function() {
//   // Function to handle dropdown menus
//   $('.underline').hover(function() {
//       $(this).find('.dropdown-container').stop().slideDown(200);
//   }, function() {
//       $(this).find('.dropdown-container').stop().slideUp(200);
//   });
// });

// Select the elements you want to apply the parallax effect to
const slideshowContainer = document.querySelector(".slideshow-container");
const content = document.querySelector(".content");

// Calculate the initial position of the content
const initialContentOffset = content.offsetTop;

// Update the position of the content based on the scroll
window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;
  const parallaxValue = scrollValue * 0.3; // Adjust this value as needed

  // Apply the parallax effect
  content.style.transform = `translateY(${parallaxValue}px)`;
});

// Ensure the slideshow container has the same height as the content
slideshowContainer.style.height = content.clientHeight + "px";


//DROPDOWN//

// $(document).ready(function(){
//   $("#men").hover(function(){
//     $(".dropdown-container-men").show();
//   },
//   function() {
//     $(".dropdown-container-men").hide();
//   });
// });

// ---- ---- Const ---- ---- //
let inputBox = document.querySelector('.input-box');
let searchIcon = document.querySelector('.search');
let closeIcon = document.querySelector('.close-icon');

// ---- ---- Open Input ---- ---- //
searchIcon.addEventListener('click', () => {
  inputBox.classList.add('open');
});
// ---- ---- Close Input ---- ---- //
closeIcon.addEventListener('click', () => {
  inputBox.classList.remove('open');
});
