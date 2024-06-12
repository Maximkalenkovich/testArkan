
//ссылки на все контейнеры
const squares = [
    document.getElementById('square1'),
    document.getElementById('square2'),
    document.getElementById('square3')
];

// ссылки на контейнеры сo спан(стрелками)
const arrowContainers = document.querySelectorAll('.arrow-container');


//повесил обработчик событий на все стрелки
arrowContainers.forEach(container => {
    container.querySelectorAll('.arrow').forEach(arrow => {
        arrow.addEventListener('click', () => {
            moveItems(parseInt(arrow.dataset.direction), container);
        });
    });
});

function moveItems(direction, container) {
    // находим индекс текущего контейнера
    let currentSquareIndex;
    if (direction === 1) {
        currentSquareIndex = squares.indexOf(container.previousElementSibling);
    } else {
        currentSquareIndex = squares.indexOf(container.nextElementSibling);
    }

    // определил индекс следующего/предыдущего контейнера
    let nextSquareIndex = currentSquareIndex + direction;

    // проверил, чтобы nextSquareIndex не выходил за пределы массива
    if (nextSquareIndex >= squares.length || nextSquareIndex < 0) {
        return;
    }

    // Получил ссылки на текущий и следующий/предыдущий квадраты
    const currentSquare = squares[currentSquareIndex];
    const nextSquare = squares[nextSquareIndex];

    // Получил все элементы списка из текущего квадрата
    const currentItems = currentSquare.querySelectorAll('li');

    // Переместил каждый элемент списка из текущего квадрата в следующий/предыдущий
    currentItems.forEach(item => {
        const newItem = document.createElement('li');
        newItem.textContent = item.textContent;
        nextSquare.querySelector('ul').appendChild(newItem);
    });

    // Удалил все элементы списка из текущего квадрата
    currentItems.forEach(item => {
        item.remove();
    });
}

// upd..можно было сделать две разные функции и повесить онклики сразу на кнопки, но в верстке уже так не делают(поэтому через direction находил нужную стрелку)
//да  и комменты так никогда не пишу , вроде итак все понятно