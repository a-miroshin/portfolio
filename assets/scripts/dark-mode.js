let button = null; // Ссылка на кнопку для переключения темного режима
let darkModeLink = null; // Ссылка на элемент <link> для темного режима
// Путь к CSS для темного режима
const darkModeCSS =
  "https://a-miroshin.github.io/portfolio/assets/styles/dark-mode.css";
// Путь к иконке для светлого режима
const lightModeIconLink =
  "https://a-miroshin.github.io/portfolio/assets/icons/sun.svg";
// Путь к иконке для темного режима
const darkModeIconLink =
  "https://a-miroshin.github.io/portfolio/assets/icons/moon.svg";

// Прописываем кнопку для переключения темного режима
function createDarkModeButton() {
  const button = document.createElement("button");
  button.id = "button-dark-mode";
  // button.className = "dark-mode";
  document.body.appendChild(button);
  return button;
}

// Создаем кнопку, если она еще не создана
if (!button) button = createDarkModeButton();

// Проверяем состояние темного режима при загрузке
// и инициализируем его при необходимости
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

// Обработчик клика по кнопке
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

// Обновляем иконку на кнопке
function updateButtonIcon(isDarkMode) {
  if (isDarkMode) {
    button.innerHTML = `<img src="${darkModeIconLink}">`;
  } else {
    button.innerHTML = `<img src="${lightModeIconLink}">`;
  }
}

// Инициализация
initializeDarkMode();
