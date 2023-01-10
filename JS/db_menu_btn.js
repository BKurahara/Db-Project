//Elementos
const menuBtn = document.querySelector(".menu");
console.log(menuBtn);
const menuContainer = document.querySelector(".menu-container");
// Evento

menuBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("active");
});
