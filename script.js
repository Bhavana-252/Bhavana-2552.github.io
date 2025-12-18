const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const themeBtn = document.getElementById("themeBtn");
const key = "theme";
const saved = localStorage.getItem(key);
if (saved) document.documentElement.setAttribute("data-theme", saved);

themeBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem(key, next);
});
