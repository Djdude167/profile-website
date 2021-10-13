// Navbar Elements
const navbar = document.querySelector(".navbar").style;
const navbarTextStyles = document.querySelector(".navbar").getElementsByTagName("a");
const navLink = document.getElementById("navList");
const navList = navLink.getElementsByTagName("a");
const cogStyle = document.getElementById("settingsCog").style;

// Page Sections
const sectionOne = document.querySelector(".landing");
const sectionTwo = document.querySelector(".highlights");
const sectionThree = document.querySelector(".projects");

// Highlights Section
const highlights1 = document.querySelector(".simpleAbout");
const highlights2 = document.querySelector(".skillList");

// Highlights Skills
const skill1 = document.getElementById("softwareList");
const skill2 = document.getElementById("programList");
const skill3 = document.getElementById("mediaList");
const skill4 = document.getElementById("miscList");

// Page Section Options
const sectionOneOptions = {threshold: 0};
const sectionTwoOptions = {threshold: 0, rootMargin: "-50px 0px -10px 0px"};
const sectionThreeOptions = {threshold: 0.25, rootMargin: "-250px 0px -10px 0px"};

// Highlights Options
const highlightsOptions = {threshold: 1};

function setElements(colour) {
    for (let i = 0; i < navList.length; i++) { navList[i].style.color = colour; } // Change all text colour
    cogStyle.color = colour;
}

function playAnimation (part, delay) {
    part.style.visibility = "visible";
    if (part.style.opacity != "100") {part.style.opacity = "0"};
    part.style.animation = "1s ease ".concat(delay, " 1 normal none running fadeDown");
    delay = parseFloat(delay.substring(0, delay.length - 1)) * 1000;
    setTimeout(function(){
        part.style.opacity = "100";
    }, (delay+50));
}

const sectionOneObserver = new IntersectionObserver (function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navbar.background = "white";
            navbar.zIndex = "10";
            // console.log("Left Area 1");
        } else if (entry.isIntersecting) {
            navbar.position = "absolute";
            navbar.zIndex = "10";
            navbar.background = "none";
            setElements("white");
            // console.log("Entered Area 1");
        }
    });
}, sectionOneOptions);

const sectionTwoObserver = new IntersectionObserver (function(entries, sectionTwoObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navbar.position = "fixed";
            navbar.zIndex = "-1";
            setElements("black");
            // console.log("Enterred Area 2");
        } else if (!entry.isIntersecting) {
            // console.log("Left Area 2");
            navbar.zIndex = "10";
            navbar.background = "none";
            setElements("white");
        }
    });
}, sectionTwoOptions);

const sectionThreeObserver = new IntersectionObserver (function(entries, sectionThreeObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Entered Area 3");
        } else if (!entry.isIntersecting) {
            console.log("Left Area 3");
        }
    });
}, sectionThreeOptions);

const highlights1Observer = new IntersectionObserver (function(entries, highlights1Observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            highlights1.style.visibility = "visible";
            highlights1.style.animation = "fadeDown 1s ease";
        }
    });
}, highlightsOptions);

const highlights2Observer = new IntersectionObserver (function(entries, highlights1Observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            playAnimation(skill1, "0s");
            playAnimation(skill2, "0.5s");
            playAnimation(skill3, "1s");
            playAnimation(skill4, "1.5s");
        }
    });
}, highlightsOptions);

sectionOneObserver.observe(sectionOne);
sectionTwoObserver.observe(sectionTwo);
sectionThreeObserver.observe(sectionThree);

highlights1Observer.observe(highlights1);
highlights2Observer.observe(highlights2);