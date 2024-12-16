/*
Задача 2:

Напишите скрипт, который будет отслеживать количество кликов на кнопку и показывать это количество в div-элементе.
Требования:
Есть кнопка, при клике на неё будет увеличиваться счётчик.
Счётчик должен отображаться в div.
Пример HTML:
<button id="clickButton">Нажми меня</button>
<div id="counter">Количество кликов: 0</div>
*/



let clickCount = 0;

const button = document.getElementById('clickButton');
const counterDiv = document.getElementById('counter');

button.addEventListener('click', function() {
    clickCount++;
    counterDiv.textContent = `Количество кликов: ${clickCount}`; 
});
