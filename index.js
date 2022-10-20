import startGame from "./modules/startGame.js";
import restart from "./modules/restartGame.js";
const restartButton = document.getElementById('restartButton');
restartButton.addEventListener('click', restart)
const arrOfImgs = startGame();
