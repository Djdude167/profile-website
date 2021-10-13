const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener('click', () => {
    navLinks.classList.toggle("open")
}); 