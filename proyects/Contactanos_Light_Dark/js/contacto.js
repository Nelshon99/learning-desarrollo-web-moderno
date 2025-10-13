const btn = document.querySelector("#btn_switch");
const conteiner = document.querySelector("#conteiner");

btn.addEventListener("click", () => {
  conteiner.classList.toggle("switch");
});
