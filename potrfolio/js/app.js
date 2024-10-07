const body_tag = document.querySelector("body");
const img_tag = document.querySelector(".img");
const button_tag = document.querySelector(".hero-contents");

function toggleTheme() {
  body_tag.classList.toggle("light");
  img_tag.classList.toggle("img-light");
  button_tag.classList.toggle("hero-contents-light");
}
