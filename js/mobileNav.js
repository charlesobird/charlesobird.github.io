const BARS_CLASS = "fa-bars";
const MARK_CLASS = "fa-xmark";

const nav = document.querySelector("nav");
const navItems = document.querySelector("nav > .navItems");
const navToggle = nav.querySelector("#mobileNavToggleContainer #mobileNavToggle");
const navToggleIcon = navToggle.querySelector("i");

function openNav() {
    const mobileNavItems = navItems.cloneNode(true);
    mobileNavItems.id = "mobileNavItems";
    nav.after(mobileNavItems);
    mobileNavItems.classList.add("column", "overflow-hidden", MARK_CLASS);
    mobileNavItems.classList.remove("row");
    mobileNavItems.classList.replace("row", "column")    
    mobileNavItems.classList.add("openNav");
    navToggleIcon.classList.replace(BARS_CLASS, MARK_CLASS);
}

function closeNav() {
    if (document.querySelector("#mobileNavItems")) {
        document.querySelector("#mobileNavItems").classList.remove("openNav");
        navToggleIcon.classList.replace(MARK_CLASS, BARS_CLASS);
        document.body.removeChild(document.querySelector("#mobileNavItems"));
    }
}
navToggle.addEventListener("click", (e) => {
    navToggleIcon.classList.contains(MARK_CLASS) ? closeNav() : openNav()
})

window.onresize = function () {
    closeNav();
}