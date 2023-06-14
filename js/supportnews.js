// Получаем ссылки на элементы <a>
const newsLink = document.getElementById('news-link');
const supportLink = document.getElementById('support-link');

// Получаем ссылки на всплывающие окна
const newsPopup = document.getElementById('newsPopup');
const supportPopup = document.getElementById('supportPopup');

// Функция, которая показывает всплывающее окно
function showPopup(popup) {
  popup.style.display = 'block';
}

// Функция, которая скрывает всплывающее окно
function hidePopup(popup) {
  popup.style.display = 'none';
}

// Назначаем обработчик события на клик по ссылке "Новости"
newsLink.addEventListener('click', function () {
  showPopup(newsPopup);
});

// Назначаем обработчик события на клик по кнопке закрытия всплывающего окна "Новости"
const newsCloseButton = document.getElementById('news-close-button');
newsCloseButton.addEventListener('click', function () {
  hidePopup(newsPopup);
});

// Назначаем обработчик события на клик по ссылке "Тех. Поддержка"
supportLink.addEventListener('click', function () {
  showPopup(supportPopup);
});

// Назначаем обработчик события на клик по кнопке закрытия всплывающего окна "Тех. Поддержка"
const supportCloseButton = document.getElementById('support-close-button');
supportCloseButton.addEventListener('click', function () {
  hidePopup(supportPopup);
});
