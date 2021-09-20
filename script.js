const burger = document.querySelector(".burger");
const burgerNavigation = document.querySelector(".burger-navigation");
const allScreen = document.querySelector(".allScreen");

let isNavOpen = false;

let toggleBurgerNavigation = () => {
    console.log("here");
    if (! isNavOpen){
        burgerNavigation.style.display = "block";
        allScreen.style.display = "block";
        isNavOpen = true;
    } else {
        burgerNavigation.style.display = "none";
        allScreen.style.display = "none";
        isNavOpen = false;
    }
}

burger.addEventListener('click', toggleBurgerNavigation);
allScreen.addEventListener('click', toggleBurgerNavigation);
burgerNavigation.addEventListener('click', toggleBurgerNavigation);

console.log("Самооценка - 150 баллов");
console.log("+10 вёрстка валидная: Document checking completed. No errors or warnings to show.");
console.log("+20 вёрстка семантическая - использованы 11 тегов (11*2 балла, максимум 20): header, nav, main, section, article, footer, figure, figcaption, h1(только один), h2, h3");
console.log("+10 использованы CSS-стили для более чем 10 элементов");
console.log("+10 контент размещается в блоке .main-wrapper, который горизонтально центрируется на странице");
console.log("+10 вёрстка адаптивная");
console.log("+10 адаптивное бургер меню (меняется при ширине экрана 930px, выпадает при нажатии на \"бургер\", скрывается при выборе пункта меню либо в свободной области экрана), со ссылками на разделы, реализована плавная прокрутка по якорям");
console.log("+10 имеется фото автора резюме, пропорции изображения не искажены, у изображения имеется атрибут alt");
console.log("+10 контакты для связи, навыки и навигационные меню оформлены в виде списков ul > li");
console.log("+10 CV содержит пример кода с подсветкой с использованием highlight.js");
console.log("+10 CV содержит изображения-ссылки на выполненные проекты (при клике по изображению страница проекта открывается в новой вкладке). У каждого проекта есть название, описание, указан перечень используемых технологий.");
console.log("+10 CV выполнено на английском языке");
console.log("+10 выполнены требования к Pull Request");
console.log("+10 есть видеорезюме автора CV на английском языке, вставленное как видео с youtube, в описании к видео имеется ссылка на его транскрипцию");
console.log("+10 потрясающий, великолепный, умопомрачительный дизайн, заслуживающий 10 баллов оценки");
