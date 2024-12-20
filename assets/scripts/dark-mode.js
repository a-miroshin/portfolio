// Генерируем кнопку для переключения темного режима
function createDarkModeButton() {
  const button = document.createElement("button");
  button.id = "button-dark-mode";
  // button.className = "dark-mode";
  button.innerHTML = null;
  document.body.appendChild(button);
  return button;
}

const button = createDarkModeButton(); // Кнопка переключения темного режима

const darkModeCSS = "assets/styles/dark-mode.css"; // Путь к CSS для темного режима
let darkModeLink = null; // Ссылка на элемент <link> для темного режима

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
    button.innerHTML = `<img src="/assets/icons/moon.svg">`;
  } else {
    button.innerHTML = `<img src="/assets/icons/sun.svg">`;
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
