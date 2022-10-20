import restart from "./modules/restartGame.js";
import splitWord from "./modules/splitWord.js";
import renderEmptyBlocks from "./modules/renderEmptyBlocks.js";
import startGame from "./modules/startGame.js";
import validateEnterValue from "./modules/validateEnterUser.js";
import findLetterAndRender from "./modules/findLetterAndRender.js";
import randomWord from './modules/generateRandomWordFromArray.js'

const restartButton = document.getElementById('restartButton');
const input = document.getElementById('input');
const send = document.getElementById('send');

restartButton.addEventListener('click', restart)

const arrOfImgs = startGame();

const randomWordFromArr = randomWord();

const arrEmptyBlocks = [];
renderEmptyBlocks(splitWord(randomWordFromArr), arrEmptyBlocks);

const objOfMistakes = {mistake: 0}

send.addEventListener('click',findLetterAndRender(splitWord(randomWordFromArr), validateEnterValue(input),arrEmptyBlocks));


