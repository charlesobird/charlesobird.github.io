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

let timeout = {
    id: 0,
    clear: () => {
        clearTimeout(this.id)
    },
    set: (func, delay) => {
        this.id = setTimeout(func, delay);
    }
}

let removeChildTimeout = null;
let addOpenNavClassTimeout = null;
navToggle.addEventListener("click", (e) => {
    if (timeout.id != 0) {
        timeout.clear()
    }
    if (navToggleIcon.classList.contains(MARK_CLASS)) {
        document.querySelector("#mobileNavItems").remove("openNav");
        navToggleIcon.classList.remove(MARK_CLASS);
        navToggleIcon.classList.add(BARS_CLASS);
        if (document.querySelector("#mobileNavItems")) {
            timeout.set(() => {
                document.body.removeChild(document.querySelector("#mobileNavItems"));
            }, 650)
        }
    } else {
        navToggleIcon.classList.add(MARK_CLASS);
        navToggleIcon.classList.remove(BARS_CLASS);
        const mobileNavItems = navItems.cloneNode(true);
        document.body.appendChild(mobileNavItems);
        mobileNavItems.id = "mobileNavItems";
        mobileNavItems.classList.add("column");
        mobileNavItems.classList.remove("row");
        mobileNavItems.classList.add("overflow-hidden");
        timeout.set(() => {
            mobileNavItems.classList.add("openNav");
        }, 250)
    }
})