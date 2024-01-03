// Variables
const fullScreenCarousel = document.querySelector(".full-screen-carousel");
const carouselSlides = document.querySelectorAll(".carousel-slide");
let currentIndex = 0;
// Function to switch to the next slide
function nextSlide() {
  carouselSlides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % carouselSlides.length;
  carouselSlides[currentIndex].classList.add("active");
}
carouselSlides[currentIndex].classList.add("active");
setInterval(nextSlide, 6000);
