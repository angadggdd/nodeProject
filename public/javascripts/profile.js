const mobileHeader = document.querySelector(".header");
const mobilebtn = document.querySelector(".mobile-navbar-btn");

const toggleNumber = () => {
   mobileHeader.classList.toggle("active")
};
mobilebtn.addEventListener("click", () => toggleNumber());


const desktopbtn = document.querySelector(".desktop-navbar-btn");
const desktopHeader = document.querySelector(".header");
const desktopToggle = () => {
    desktopHeader.classList.toggle("sideMenu")
};
desktopbtn.addEventListener("click", () => desktopToggle());



const lmobilebtn = document.querySelector(".lmobile-navbar-btn");
const lmobileHeader = document.querySelector(".header");
const lmobileToggle = () => {
    lmobileHeader.classList.toggle("lsideMenu")
};
lmobilebtn.addEventListener("click", () => lmobileToggle());


// var typed = new Typed('.text', {
//     strings: ['Frontend Developer, Web Developer', 'Youtuber'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// });