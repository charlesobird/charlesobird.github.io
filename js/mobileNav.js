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
const BARS_CLASS = "fa-bars"
const MARK_CLASS = "fa-xmark"

const nav = document.querySelector("nav");
const navItems = document.querySelector("nav > .navItems");
const navToggle = nav.querySelector("#mobileNavToggleContainer #mobileNavToggle");
const navToggleIcon = navToggle.querySelector("i");

navToggle.addEventListener("click", (e) => {
    if (navToggleIcon.classList.contains(MARK_CLASS)) {
        navToggleIcon.classList.remove(MARK_CLASS);
        navToggleIcon.classList.add(BARS_CLASS);
        document.querySelector("#mobileNavItems").remove("openNav");
        setTimeout(() => {
            document.body.removeChild(document.querySelector("#mobileNavItems"));
        }, 650)
    } else {
        navToggleIcon.classList.add(MARK_CLASS);
        navToggleIcon.classList.remove(BARS_CLASS);
        // navItems.classList.add("openNav");
        const mobileNavItems = navItems.cloneNode(true);
        mobileNavItems.id = "mobileNavItems";
        mobileNavItems.classList.add("column");
        mobileNavItems.classList.remove("row");
        mobileNavItems.classList.add("overflow-hidden");
        document.body.appendChild(mobileNavItems);
        setTimeout(() => {
            mobileNavItems.classList.add("openNav");
        }, 100 );
    }
})