const changeMode = (btn) => {
  const root = document.documentElement;
  const $btn = document.getElementById(btn);

  const theme = window.localStorage.getItem("theme");

  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    window.localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
    window.localStorage.setItem("theme", "light");
  }

  $btn.addEventListener("click", () => {
    if (root.dataset.theme && root.dataset.theme === "dark") {
      $btn.innerHTML = `
        Claro
        <i class="fa-regular fa-sun"></i>
      `;
      root.removeAttribute("data-theme");
      window.localStorage.setItem("theme", "light");
    } else {
      $btn.innerHTML = `
        Oscuro
        <i class="fa-regular fa-moon"></i>
      `;
      root.setAttribute("data-theme", "dark");
      window.localStorage.setItem("theme", "dark");
    }
  });
};

export default changeMode;
