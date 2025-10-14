const slider = document.querySelector("#slider");
const slide = document.querySelectorAll("#slide");

const l_arrow = document.querySelector("#l_arrow");
const r_arrow = document.querySelector("#r_arrow");

const puntos_wrapper = document.querySelector("#puntos");
const puntos = document.querySelectorAll("#puntos span");

// Iniciar slider

let slideIndex = 0;

//Iterar todos los puntos y agregar un event listener
puntos.forEach((punto, indice) => {
  punto.addEventListener("click", () => {
    //Actualizamos el indice clickeado
    slideIndex = indice;

    //Actualizar posicion del slider para mostrar el slider indice
    slider.style.transform = `translateX(${slideIndex * -20}%)`;

    //Actualizamos la clase active
    document.querySelector("#puntos .active").classList.remove("active");
    punto.classList.add("active");
  });
});

//Evento click en la flecha izquierda

l_arrow.addEventListener("click", () => {
  slideIndex = slideIndex > 0 ? slideIndex - 1 : 0;
  //Actualizamos la clase active
  document.querySelector("#puntos .active").classList.remove("active");
  puntos_wrapper.children[slideIndex].classList.add("active");
  //Movemos a la izquierda
  slider.style.transform = `translateX(${slideIndex * -20}%)`;
});

//Evento click en la flecha derecha

r_arrow.addEventListener("click", () => {
  slideIndex =
    slideIndex < slide.length - 1 ? slideIndex + 1 : slide.length - 1;
  //Actualizamos la clase active
  document.querySelector("#puntos .active").classList.remove("active");
  puntos_wrapper.children[slideIndex].classList.add("active");
  //Movemos a la Derecha
  slider.style.transform = `translateX(${slideIndex * -20}%)`;
});
