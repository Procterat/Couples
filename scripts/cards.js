import { numberOfElements } from "./createBoard.js";
import { gameLogic } from './gameLogic.js';

function createCard(flippedIcon) {
    const cardTemplate = document.querySelector('#cardTemplate');
    const template = cardTemplate.content.cloneNode(true);
    const card = template.querySelector('.card');
    card.querySelector('#flippedIcon').classList.add(`fa-${flippedIcon}`);

    card.addEventListener('click', () => gameLogic(card));

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

export { createCard, createIconsArray };