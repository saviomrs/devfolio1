// Hamburgue nave
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll 
const scrollUp = document.querySelector("#scroll-up");

// Selecioar links de navegação
const navLink = document.querySelectorAll(".nav-link");

// Menu Hamburger 
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

//  Fechar menu hamburger
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll para o topo
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
