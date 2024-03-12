const hamburgerMenu = document.querySelector(".hamburger-menu");
const mobileNavbar = document.querySelector(".mobile-navbar");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  mobileNavbar.classList.toggle("top-[1000px]");
});
