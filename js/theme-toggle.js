document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const lightModeBtn = document.getElementById("lightModeBtn");
  const darkModeBtn = document.getElementById("darkModeBtn");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") body.classList.add("dark-mode");
  lightModeBtn.addEventListener("click", () => {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  });
  darkModeBtn.addEventListener("click", () => {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  });
});
