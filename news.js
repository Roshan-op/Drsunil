const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());



const masonryItems = document.querySelectorAll('.masonry-item img');
const modal = document.getElementById('videoModal');
const youtubePlayer = document.getElementById('youtubePlayer');
const closeButton = document.querySelector('.close-button');

// Open Modal
masonryItems.forEach(item => {
  item.addEventListener('click', () => {
    const videoId = item.getAttribute('data-video-id');
    youtubePlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    modal.style.display = 'flex';
  });
});

// Close Modal
closeButton.addEventListener('click', () => {
  youtubePlayer.src = '';
  modal.style.display = 'none';
});

// Close Modal on Outside Click
window.addEventListener('click', e => {
  if (e.target === modal) {
    youtubePlayer.src = '';
    modal.style.display = 'none';
  }
});