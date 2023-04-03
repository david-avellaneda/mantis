import changeMode from "./changeMode.js";
import formValidations from "./validations.js";

const modeSwitchBtn = "theme";

const $themeBtn = document.getElementById(modeSwitchBtn);

if (localStorage.getItem("theme") === "dark") {
  $themeBtn.innerHTML = `
    Oscuro
    <i class="fa-regular fa-moon"></i>
  `;
} else {
  $themeBtn.innerHTML = `
    Claro
    <i class="fa-regular fa-sun"></i>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  formValidations();
  setTimeout(() => {
    document.querySelector(".login-input input").focus();
  }, 500);
  changeMode(modeSwitchBtn);
});
