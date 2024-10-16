const menuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

document.addEventListener("scroll", () => {
  const scrollButton = document.getElementById("scrollButton");
  if (window.scrollY > 100) {
    scrollButton.classList.remove("hidden", "opacity-0", "translate-y-2");
    scrollButton.classList.add("opacity-100", "translate-y-0");
  } else {
    scrollButton.classList.add("opacity-0", "translate-y-2");
    scrollButton.classList.remove("opacity-100", "translate-y-0");
    setTimeout(() => {
      if (window.scrollY <= 100) {
        scrollButton.classList.add("hidden");
      }
    }, 300);
  }
});

document.getElementById("scrollButton").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});