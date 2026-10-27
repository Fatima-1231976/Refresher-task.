const themeButton = document.querySelector("#themeButton");
const tipsButton = document.querySelector("#tipsButton");
const tipsList = document.querySelector("#tipsList");

themeButton.addEventListener("click", () => {
  const darkMode = document.body.classList.toggle("dark");
  themeButton.textContent = darkMode ? "Light mode" : "Dark mode";
  themeButton.setAttribute("aria-pressed", String(darkMode));
});

tipsButton.addEventListener("click", () => {
  const showTips = tipsList.hidden;
  tipsList.hidden = !showTips;
  tipsButton.textContent = showTips ? "Hide gardening tips" : "Show gardening tips";
  tipsButton.setAttribute("aria-expanded", String(showTips));
});
