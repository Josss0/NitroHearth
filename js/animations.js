// Ожидание события "DOMContentLoaded" для запуска кода после полной загрузки DOM
window.addEventListener('DOMContentLoaded', (event) => {
    const header = document.querySelector('header');
    const blockInfo = document.querySelector('.block-info');
    const animationSpeed = 1000; // Скорость анимации в миллисекундах

    // Применение анимации к заголовку и блоку информации
    header.style.transition = `opacity ${animationSpeed}ms ease-out, transform ${animationSpeed}ms ease-out`;
    blockInfo.style.transition = `opacity ${animationSpeed}ms ease-out`;

    // Установка начальных значений прозрачности и положения элементов
    header.style.opacity = 0;
    header.style.transform = 'translateY(-20px)';
    blockInfo.style.opacity = 0;

    // Запуск анимации после небольшой задержки
    setTimeout(() => {
        header.style.opacity = 1;
        header.style.transform = 'translateY(0)';
        blockInfo.style.opacity = 1;
    }, 100);
});

