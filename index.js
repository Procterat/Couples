const stepNumber = document.querySelector('#step__number');
const timeNumber = document.querySelector('#time__number');
const choose = document.querySelector('.choose');
const chooseButton = document.querySelector('.choose__button');
const input = document.querySelector('input');
const gameTableTemplate = document.querySelector('#gameTableTemplate');
const game = document.querySelector('.game');
let numberOfElements;

chooseButton.addEventListener('click', createBoard);

function createBoard(event) {
    event.preventDefault();

    if (input.value >= 2 && input.value <= 6 && input.value % 2 === 0) {
        numberOfElements = input.value;
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

    let count = numberOfElements ** 2;
    for (let i = 0; i < count; i++) {
        table.appendChild(createCard());
    }
}

function createCard() {
    const cardTemplate = document.querySelector('#cardTemplate');
    const template = cardTemplate.content.cloneNode(true);
    const card = template.querySelector('.card');

    return card;
}
