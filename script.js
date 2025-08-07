const toggleIcon = document.querySelector("#toggle-icon");
const calculator = document.querySelector(".calculator");

toggleIcon.addEventListener("click", () => {
  calculator.classList.toggle("dark-mode");
  toggleIcon.textContent = calculator.classList.contains("dark-mode") ? "☀️" : "🌙";
});
