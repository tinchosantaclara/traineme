const links = document.querySelectorAll(".nav__link");

// Recorre cada enlace
links.forEach((link) => {
  link.addEventListener("click", () => {
    // Remueve la clase "active" de todos los enlaces
    links.forEach((item) => item.classList.remove("active"));
    // Agrega la clase "active" al enlace que se hizo clic
    link.classList.add("active");
  });
});
