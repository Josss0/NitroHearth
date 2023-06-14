const installButton = document.getElementById('installButton');
// Получаем ссылку на элемент кнопки с id "installButton"

installButton.addEventListener('click', () => {
  // Добавляем обработчик события "click" для кнопки
  const zipUrl = 'loading/gamever.zip';
  // Задаем путь к zip-архиву

  const link = document.createElement('a');
  // Создаем элемент <a>, который будет использоваться для скачивания архива

  link.href = zipUrl;
  // Задаем ссылку для загрузки - путь к zip-архиву

  link.download = 'gamever.zip';
  // Устанавливаем имя файла, каким будет сохранен архив на компьютере пользователя

  const clickEvent = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: false
  });
  // Создаем событие клика для элемента <a>

  link.dispatchEvent(clickEvent);
  // Инициируем событие клика на элементе <a>, что запускает процесс скачивания архива
});
