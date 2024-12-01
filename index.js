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

    let icons = createIconsArray();
    console.log(icons);

    icons.forEach((icon) => {
        table.appendChild(createCard(icon));
    });
}

function createCard(flippedIcon) {
    const cardTemplate = document.querySelector('#cardTemplate');
    const template = cardTemplate.content.cloneNode(true);
    const card = template.querySelector('.card');
    card.querySelector('#flippedIcon').classList.add(`fa-${flippedIcon}`);

    return card;
}

function createIconsArray() {
    let cardsIcons = ["compass", "cloud", "play", "bolt", "stop", "cogs", "atom", "basketball-ball", "arrows", "angle-left", "bars", "file", "filter", "gear", "folder", "folder-open", "shield", "scissors", "pen-clip"];
    let needIcons;

    if (numberOfElements == 2) {
        needIcons = cardsIcons.slice(0, numberOfElements * 1);
    } else if (numberOfElements == 4) {
        needIcons = cardsIcons.slice(0, numberOfElements * 2);
    } else if (numberOfElements == 6) {
        needIcons = cardsIcons.slice(0, numberOfElements * 3);
    }
    
    
    let doubleCards = dublicateElements(needIcons);
    let result = doubleCards.sort(() => Math.random() - 0.5);

    return result;
}

function dublicateElements(array) {
    let mass = [];
    array.forEach((element) => {
        mass.push(element, element);
    });

    return mass;
}
