const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());



let currentIndex = 0;
let autoPlayInterval;

const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

// Function to move slides
function moveSlide(direction) {
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  updateSlidePosition();
  resetAutoPlay(); // Reset auto-play on manual interaction
}

// Update the slide position
function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-play functionality
function autoPlay() {
  autoPlayInterval = setInterval(() => {
    moveSlide(1);
  }, 3000); // Change slides every 3 seconds
}

// Reset auto-play after manual navigation
function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  autoPlay();
}

// Initialize auto-play on load
window.onload = autoPlay;