const chooseButton = document.querySelector('.choose__button');

import { createBoard } from './scripts/createBoard.js';

chooseButton.addEventListener('click', createBoard);
