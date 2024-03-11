/* const BARS_CLASS = "fa-bars"
const MARK_CLASS = "fa-xmark"

const nav = document.querySelector("nav");
const navItems = document.querySelector("nav > .navItems");
const navToggle = nav.querySelector("#mobileNavToggleContainer #mobileNavToggle");
const navToggleIcon = navToggle.querySelector("i");
navToggle.addEventListener("click", (e) => {
    if (navToggleIcon.classList.contains(MARK_CLASS)) {
        navToggleIcon.classList.remove(MARK_CLASS);
        navToggleIcon.classList.add(BARS_CLASS);

        document.querySelector("#mobileNavItems").classList.remove("openNav");
    } else {
        navToggleIcon.classList.add(MARK_CLASS);
        navToggleIcon.classList.remove(BARS_CLASS);
        
        
        document.querySelector("#mobileNavItems").classList.add("openNav");
    }
}) */

/* const openNavButton = document.querySelector("#mobileNavOpen");
const closeNavButton = document.querySelector("#mobileNavClose");
/* const header = document.querySelector("header");
const body = document.querySelector("body");
openNavButton.addEventListener("click", (e) => {
    header.classList.add("openNav")
    nav.classList.add("openNav")
    openNavButton.classList.add("active");
    body.style.overflowY = "hidden";    
})
closeNavButton.addEventListener("click", (e) => {
    openNavButton.classList.remove("active");
    header.classList.remove("openNav")
    nav.classList.remove("openNav")
    body.style.overflowY = "auto";    
}) */
const BARS_CLASS = "fa-bars";
const MARK_CLASS = "fa-xmark";

const nav = document.querySelector("nav");
const navItems = document.querySelector("nav > .navItems");
const navToggle = nav.querySelector("#mobileNavToggleContainer #mobileNavToggle");
const navToggleIcon = navToggle.querySelector("i");

const body = document.querySelector("body");
const mobileNavItems = navItems.cloneNode(true);
mobileNavItems.id = "mobileNavItems";
nav.after(mobileNavItems);
mobileNavItems.classList.replace("row", "column")
mobileNavItems.style.margin = "0 auto"
mobileNavItems.style.height = 0;
function openNav() {
    body.classList.add("overflow-hidden");
    mobileNavItems.classList.add("openNav");
    navToggleIcon.classList.replace(BARS_CLASS, MARK_CLASS);
}

function closeNav() {
    if (document.querySelector("#mobileNavItems")) {
        navToggleIcon.classList.replace(MARK_CLASS, BARS_CLASS);
        document.querySelector("#mobileNavItems").classList.remove("openNav");
        body.classList.remove("overflow-hidden");
    }
}
navToggle.addEventListener("click", (e) => {
    navToggleIcon.classList.contains(MARK_CLASS) ? closeNav() : openNav()
})

window.onresize = function () {
    closeNav();
}