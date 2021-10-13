const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");
const navbar = document.getElementById("navbar");
const navbarStyle = document.getElementById("navbar").style;
const navLink = document.getElementById("navList");
const navList = navLink.getElementsByTagName("a");

const range1 = 550;

menu.addEventListener('click', () => {
    navLinks.classList.toggle("open")
}); 

window.addEventListener('scroll', () => {
    var scroll = this.scrollY;
    if (scroll > 0 && scroll <= range1) {
        navbarStyle.position = "absolute";
        navbarStyle.zIndex = "10";
        for (let i = 0; i < navList.length; i++) { navList[i].style.color = "white"; }
    } else if (scroll > range1) {
        navbarStyle.position = "fixed";
        navbarStyle.zIndex = "-1";
        for (let i = 0; i < navList.length; i++) { navList[i].style.color = "black"; }
    }
})