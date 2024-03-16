// hamburger menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const mobileNavbar = document.querySelector(".mobile-navbar");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  mobileNavbar.classList.toggle("top-[1000px]");
});

// counter
const counterUp = window.counterUp.default;

const callback = (entries) => {
  entries.forEach((entry) => {
    const el = entry.target;
    if (entry.isIntersecting && !el.classList.contains("is-visible")) {
      counterUp(el, {
        duration: 2000,
        delay: 16,
      });
      el.classList.add("is-visible");
    }
  });
};

const IO = new IntersectionObserver(callback, { threshold: 1 });

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  IO.observe(counter);
});
