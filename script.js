const btn = document.querySelector('.btn'), // Находим кнопку с классом 'btn'
    elem = document.querySelector('.box');  // Находим элемент с классом 'box'
let pos = 0; // Переменная для хранения текущей позиции элемента

// Функция анимации элемента
function myAnimation() {
    pos++; // Увеличиваем позицию на 1
    elem.style.top = pos + "px"; // Устанавливаем новое значение для отступа сверху
    elem.style.left = pos + 'px'; // Устанавливаем новое значение для отступа слева

    // Если позиция меньше 300 пикселей, вызываем анимацию снова
    if (pos < 300) {
        requestAnimationFrame(myAnimation); // Используем requestAnimationFrame для плавной анимации
    }
}

// Обработчик клика на кнопку
btn.addEventListener('click', () =>
    requestAnimationFrame(myAnimation) // Запускаем анимацию при клике на кнопку
);

// Пример использования cancelAnimationFrame
let id = requestAnimationFrame(myAnimation); // сохраняем ID
cancelAnimationFrame(id); // Отменяем анимацию до её выполнения
