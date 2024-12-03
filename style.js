const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());
// Slider Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Change slide every 6 seconds
setInterval(nextSlide, 6000);

// Placeholder for language translation functionality
document.getElementById('translate-button').addEventListener('click', () => {
    alert('Language translation coming soon!');
});
function playVideo(videoId) {
    // Get the modal and iframe
    const modal = document.getElementById('videoModal');
    const player = document.getElementById('youtubePlayer');

    // Set the YouTube video URL
    player.src = `https://www.youtube.com/embed/nZpwEhBxFJA?si=4aqtfyVPl9FGhFaL" `;

    // Show the modal
    modal.style.display = 'flex';
}

function closeVideo() {
    // Hide the modal
    const modal = document.getElementById('videoModal');
    modal.style.display = 'none';

    // Stop the video
    const player = document.getElementById('youtubePlayer');
    player.src = '';
}










