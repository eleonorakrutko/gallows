import startGame from "./modules/startGame.js";
import restart from "./modules/restartGame.js";
import { renderEmptyBlocks } from "./modules/renderEmptyBlocks.js";
import validateEnterValue from "./modules/validateEnterUser.js";
import randomWord from "./modules/generateRandomWordFromArray.js";


const restartButton = document.getElementById('restartButton');
restartButton.addEventListener('click', restart)

const input = document.getElementById('input');
const sendButton = document.getElementById('send')


const arrOfImgs = startGame();

const randomWordFromArr = randomWord();

const arrEmptyBlocks = [];
renderEmptyBlocks(arrEmptyBlocks);

const objMistake = {
    mistake: 0,
}


sendButton.addEventListener('click', validateEnterValue(input))