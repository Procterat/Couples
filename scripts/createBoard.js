let numberOfElements;
const input = document.querySelector('input');
const gameTableTemplate = document.querySelector('#gameTableTemplate');
const game = document.querySelector('.game');
const choose = document.querySelector('.choose');

import { createCard, createIconsArray } from './cards.js';
import { startTimer } from './timer.js'

function createBoard() {
    // event.preventDefault();
    startTimer();

    if (input.value >= 2 && input.value <= 6 && input.value % 2 === 0) {
        numberOfElements = input.value;
        console.log(choose);
        choose.style.display = 'none';
    } else {
        numberOfElements = 4;
        choose.style.display = 'none';
    }

    const template = gameTableTemplate.content.cloneNode(true);
    const table = template.querySelector('.table');
    const restartButton = template.querySelector('.table__button');

    table.style.gridTemplateColumns = `repeat(${numberOfElements}, 1fr)`;
    table.style.gridTemplateRows = `repeat(${numberOfElements}, 1fr)`;

    restartButton.addEventListener('click', () => {
        location.reload();
    });

    game.appendChild(template);

    let icons = createIconsArray();
    console.log(icons);

    icons.forEach((icon) => {
        table.appendChild(createCard(icon));
    });
}

export { createBoard, numberOfElements };