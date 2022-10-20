import startGame from "./modules/startGame.js";
import restart from "./modules/restartGame.js";
import { renderEmptyBlocks } from "./modules/renderEmptyBlocks.js";

const restartButton = document.getElementById('restartButton');
restartButton.addEventListener('click', restart)

const input = document.getElementById('input');
const sendButton = document.getElementById('send')
import validateEnterValue from "./modules/validateEnterUser.js";

const arrOfImgs = startGame();
const arrEmptyBlocks = [];
renderEmptyBlocks(arrEmptyBlocks);

const objMistake = {
    mistake: 0,
}


sendButton.addEventListener('click', validateEnterValue(input))