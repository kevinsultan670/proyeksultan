const toggleButton = document.getElementById("toggle-mode");
const body = document.body;
const modeIcons = document.querySelectorAll(".mode-icon");

toggleButton.addEventListener("click", () => {
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    modeIcons[0].style.display = "none"; // Hide light mode icon
    modeIcons[1].style.display = "block"; // Show dark mode icon
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    modeIcons[0].style.display = "block"; // Show light mode icon
    modeIcons[1].style.display = "none"; // Hide dark mode icon
  }
});
