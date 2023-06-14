// Добавление обработчика события "wheel" для прокрутки страницы
document.addEventListener(
  "wheel",
  function touchHandler(e) {
    if (e.ctrlKey) {
      e.preventDefault(); // Предотвращение прокрутки страницы, если зажата клавиша Ctrl
    }
  },
  { passive: false } // Установка параметра passive в false для разрешения вызова preventDefault()
);
