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
    setTimeout(() => {
        mobileNavItems.classList.add("column");
        mobileNavItems.classList.remove("row");
        mobileNavItems.classList.replace("row", "column")    
        mobileNavItems.classList.add("openNav");
        document.body.classList.add("overflow-hidden");
        navToggleIcon.classList.replace(BARS_CLASS, MARK_CLASS);
        mobileNavItems.style.height = "100vh"
    }, 25);
}

function closeNav() {
    if (document.querySelector("#mobileNavItems")) {
        document.querySelector("#mobileNavItems").classList.remove("openNav");
        navToggleIcon.classList.replace(MARK_CLASS, BARS_CLASS);
        document.querySelector("#mobileNavItems").style.height = "0";
        setTimeout(() => {
            document.body.removeChild(document.querySelector("#mobileNavItems"))
        }, 200);
        document.body.classList.remove("overflow-hidden");
    }
}
navToggle.addEventListener("click", (e) => {
    navToggleIcon.classList.contains(MARK_CLASS) ? closeNav() : openNav()
})

window.onresize = function () {
    closeNav();
}