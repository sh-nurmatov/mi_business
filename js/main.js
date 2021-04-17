const btnHamburger = document.querySelector(".hamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
// const overlay = document.querySelector(".overlay");
// const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", () => {
  if (document.querySelector(".hamburger-menu").classList.contains("close")) {
    btnHamburger.classList.add("header__toggle");
    document.querySelector(".hamburger-menu").classList.remove("close");
    document.querySelector(".hamburger-menu").classList.add("open");
  } else {
    btnHamburger.classList.remove("header__toggle");
    document.querySelector(".hamburger-menu").classList.remove("open");
    document.querySelector(".hamburger-menu").classList.add("close");
  }
});
