const button = document.getElementById("button-dark-mode");
let isDarkMode = false; // Флаг для отслеживания состояния кнопки
const darkModeStylesheetId = "dark-mode-stylesheet";

// Устанавливаем начальную иконку
button.innerHTML = `<img src="assets/icons/sun.svg">`;

// Добавляем обработчик события
button.onclick = function () {
  toggleDarkMode();
};

function toggleDarkMode() {
  if (isDarkMode === false) {
    // Добавляем стили темной темы
    addDarkModeStylesheet();
    button.innerHTML = `
                  <img src="assets/icons/moon.svg">
              `;
    isDarkMode = true;
  } else {
    // Удаляем стили темной темы
    removeDarkModeStylesheet();
    button.innerHTML = `
                  <img src="assets/icons/sun.svg">
              `;
    isDarkMode = false;
  }
}

function addDarkModeStylesheet() {
  if (!document.getElementById(darkModeStylesheetId)) {
    const link = document.createElement("link");
    link.id = darkModeStylesheetId;
    link.rel = "stylesheet";
    link.href = "assets/styles/dark-mode.css"; // Укажите путь к вашему CSS-файлу
    document.head.appendChild(link);
  }
}

function removeDarkModeStylesheet() {
  const link = document.getElementById(darkModeStylesheetId);
  if (link) {
    document.head.removeChild(link);
  }
}
