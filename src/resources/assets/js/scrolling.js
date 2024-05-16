
    document.getElementById('scrollToElement').addEventListener('click', function (event) {
    event.preventDefault(); // Отменяем стандартное действие ссылки

    var targetElement = document.querySelector('[data-scroll="6"]');
    if (targetElement) {
    targetElement.scrollIntoView({behavior: 'smooth', block: 'start'}); // Прокручиваем до целевого элемента
}
});

    document.getElementById('scrollToElement1').addEventListener('click', function (event) {
    event.preventDefault(); // Отменяем стандартное действие ссылки

    var targetElement = document.querySelector('[data-scroll="6"]');
    if (targetElement) {
    targetElement.scrollIntoView({behavior: 'smooth', block: 'start'}); // Прокручиваем до целевого элемента
}
});

    document.getElementById('scrollToElement2').addEventListener('click', function (event) {
    event.preventDefault(); // Отменяем стандартное действие ссылки

    var targetElement = document.querySelector('[data-scroll="6"]');
    if (targetElement) {
    targetElement.scrollIntoView({behavior: 'smooth', block: 'start'}); // Прокручиваем до целевого элемента
}
});

