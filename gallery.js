const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());



  AOS.init({
    duration: 1200, // Animation duration in milliseconds
    once: true, // Whether animation should happen only once while scrolling
  });
