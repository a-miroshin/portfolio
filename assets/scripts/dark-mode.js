const button = document.getElementById("button-dark-mode");
const darkModeCSS = "assets/styles/dark-mode.css";
let darkModeLink = null;

// Проверяем состояние темного режима при загрузке
function initializeDarkMode() {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    applyDarkMode();
  }
  updateButtonIcon(isDarkMode);
}

// Применяем темный режим
function applyDarkMode() {
  if (!darkModeLink) {
    darkModeLink = document.createElement("link");
    darkModeLink.rel = "stylesheet";
    darkModeLink.href = darkModeCSS;
    document.head.appendChild(darkModeLink);
  }
}

// Отключаем темный режим
function removeDarkMode() {
  if (darkModeLink) {
    darkModeLink.remove();
    darkModeLink = null;
  }
}

// Обновляем иконку на кнопке
function updateButtonIcon(isDarkMode) {
  if (isDarkMode) {
    button.innerHTML = `<img src="assets/icons/moon.svg">`;
  } else {
    button.innerHTML = `<img src="assets/icons/sun.svg">`;
  }
}

// Переключение темного/светлого режима
button.onclick = function () {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    removeDarkMode();
    localStorage.setItem("darkMode", "false");
  } else {
    applyDarkMode();
    localStorage.setItem("darkMode", "true");
  }
  updateButtonIcon(!isDarkMode);
};

// Инициализация
initializeDarkMode();
