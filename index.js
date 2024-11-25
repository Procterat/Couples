const stepNumber = document.querySelector('#step__number');
const timeNumber = document.querySelector('#time__number');
const choose = document.querySelector('.choose');
const button = document.querySelector('button');
const input = document.querySelector('input');
let numberOfElements;

button.addEventListener('click', createBoard);

function createBoard(event) {
    event.preventDefault();
    if (input.value >= 2 && input.value <= 2 && input.value % 2 === 0) {
        numberOfElements = input.value;
        choose.style.display = 'none';
    } else {
        numberOfElements = 4;
        choose.style.display = 'none';
    }
    console.log(numberOfElements);
}
