let totalTime = 60;
let intervalId;

import { totalFlips } from "./gameLogic.js";

function startTimer() {
    const time = document.querySelector("#time__number");
    const moves = document.querySelector("#step__number");
  
    intervalId = setInterval(() => {
        totalTime--;
        moves.innerHTML = totalFlips;
        time.textContent = totalTime;
        if (totalTime === 0) {
            clearInterval(intervalId);
        }
    }, 1000);
}

export { totalTime, intervalId, startTimer };