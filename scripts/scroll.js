const navbar = document.querySelector(".navbar").style;
const navbarTextStyles = document.querySelector(".navbar").getElementsByTagName("a");
const navLink = document.getElementById("navList");
const navList = navLink.getElementsByTagName("a");
const cogStyle = document.getElementById("settingsCog").style;

const sectionOne = document.querySelector(".landing");
const sectionTwo = document.querySelector(".highlights");
const sectionThree = document.querySelector(".projects");

const sectionOneOptions = {threshold: 0};
const sectionTwoOptions = {threshold: 0, rootMargin: "-50px 0px -10px 0px"};
const sectionThreeOptions = {threshold: 0, rootMargin: "-250px 0px -10px 0px"};

function setElements(colour) {
    for (let i = 0; i < navList.length; i++) { navList[i].style.color = colour; } // Change all text colour
    cogStyle.color = colour;
}

const sectionOneObserver = new IntersectionObserver (function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navbar.background = "white";
            navbar.zIndex = "10";
            console.log("Left Area 1");
        } else if (entry.isIntersecting) {
            navbar.position = "absolute";
            navbar.zIndex = "10";
            navbar.background = "none";
            setElements("white");
            console.log("Entered Area 1");
        }
    })
}, sectionOneOptions);

const sectionTwoObserver = new IntersectionObserver (function(entries, sectionTwoObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navbar.position = "fixed";
            navbar.zIndex = "-1";
            setElements("black");
            console.log("Enterred Area 2");
        } else if (!entry.isIntersecting) {
            console.log("Left Area 2");
            navbar.zIndex = "10";
            navbar.background = "none";
            setElements("white");
        }
    })
}, sectionTwoOptions);

const sectionThreeObserver = new IntersectionObserver (function(entries, sectionThreeObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Entered Area 3");
        } else if (!entry.isIntersecting) {
            console.log("Left Area 3");
        }
    })
}, sectionThreeOptions);

sectionOneObserver.observe(sectionOne);
sectionTwoObserver.observe(sectionTwo);
sectionThreeObserver.observe(sectionThree);