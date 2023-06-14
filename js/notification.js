// Создание обработчика события "DOMContentLoaded", который запускается после полной загрузки DOM
document.addEventListener("DOMContentLoaded", function() {
  var popupTimeout; // Переменная для хранения идентификатора таймера скрытия окна
  
  var texts = [
    "Погрузитесь в мир кликания и наслаждайтесь игрой, которая никогда не станет скучной!",
    "Готовьтесь к бесконечному кликеру! Соревнуйтесь с другими игроками!",
    "Прокачивайте свою клик-мощь и разблокируйте новые улучшения!",
    "Улучшайте свои навыки кликера и покажите свою мощь! Кликайте быстрее, чтобы заработать больше очков и стать лучшим игроком!",

  ]; // Массив с различными текстами для окна
  
  // Задержка перед вызовом функции showPopup() для показа окна через 10 секунд
  setTimeout(showPopup, 1000);
  
  // Функция для показа окна
  function showPopup() {
    var popup = document.createElement("div"); // Создание элемента div для окна
    popup.className = "popup"; // Присвоение класса "popup" элементу div
  
    var icon = document.createElement("img"); // Создание элемента img для иконки
    icon.src = "image/notify.svg"; // Задание пути к изображению для иконки
    icon.alt = "Иконка"; // Задание атрибута alt для иконки
    icon.className = "popup-icon"; // Присвоение класса "popup-icon" элементу img
    popup.appendChild(icon); // Добавление элемента img внутрь элемента div
  
    var text = document.createElement("div"); // Создание элемента div для текста окна
    text.className = "popup-text"; // Присвоение класса "popup-text" элементу div
    text.textContent = getRandomText(); // Задание случайного текста для элемента div
    popup.appendChild(text); // Добавление элемента div внутрь элемента div
  
    document.body.appendChild(popup); // Добавление элемента div в конец body
  
    popupTimeout = setTimeout(hidePopup, 10000); // Установка таймера для скрытия окна через 10 секунд
  }
  
  // Функция для скрытия окна
  function hidePopup() {
    var popup = document.querySelector(".popup"); // Поиск элемента с классом "popup"
    if (popup) {
      popup.classList.add("hide"); // Добавление класса "hide" для скрытия окна с анимацией
      setTimeout(function() {
        popup.remove(); // Удаление элемента div через 1 секунду после скрытия
      }, 1000);
    }
  }
  
  // Обработчик события клика, который отменяет таймер скрытия окна при взаимодействии с пользователем
  document.addEventListener("click", function() {
    clearTimeout(popupTimeout); // Очистка таймера скрытия окна
  });
  
  // Создание элемента style и добавление стилей для окна
  var styles = document.createElement("style");
  styles.innerHTML = `
  .popup {
    position: fixed;
    left: 50%;
    bottom: 50px;
    transform: translateX(-50%);
    display: flex;
    align-items: center; /* Align items horizontally */
    justify-content: center;
    padding: 30 20px;
    background-color: #161616;
    box-shadow: 0px 0px 4px #000000;
    border: 1px solid #222222;
    z-index: 9999;
    border-radius: 109px;
  }
  
  .popup-icon {
    width: 50px;
    height: 50px;
    margin-right: 10px; /* Add spacing between icon and text */
  }
  
  .popup-text {
    margin-top: 0px;
    margin-right: 19px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #D2D2D2;
    text-align: center;
    white-space: nowrap; /* Prevent text from wrapping to the next line */
  }
  
  .hide {
    opacity: 0;
    transition: opacity 1s ease-out;
  }  
  `;
  document.head.appendChild(styles); // Добавление элемента style в head документа
  
  // Удаление окна, если скрипт будет загружен после 10 секунд
  popupTimeout = setTimeout(function() {
    hidePopup();
  }, 10000);
  
  // Функция для получения случайного текста из массива texts
  function getRandomText() {
    var randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
  }
});
