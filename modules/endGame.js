import restart from "./restartGame.js";
import renderFinalPhrase from "./renderFinalePhrase.js";
const closeButton = document.getElementById('buttonClose');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');

function showModalWindow(){
    modal.style.display = 'block';
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        restart();
    })
    return modalContent;
}

function loose(rightWord) {
    setTimeout(() => {
        renderFinalPhrase(`Вы проиграли. Правильное слово - ${rightWord}`)
    }, 1000);
}

function win(arrBlocks, rightWord){
    if(arrBlocks.every(block => block.firstChild)){
       renderFinalPhrase(`Вы выиграли! Угаданное слово - ${rightWord}`)
    }
}

export {loose, win, showModalWindow}

