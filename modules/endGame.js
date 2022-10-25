const closeButton = document.getElementById('buttonClose');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');

function showModalWindow(){
    modal.style.display = 'block';
    closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    })
    return modalContent
}

function loose(rightWord) {
    setTimeout(() => {
        const loose = showModalWindow();
        const h2 = document.createElement('h2');
        h2.innerText = `Вы проиграли. Правильное слово - ${rightWord}`;
        loose.append(h2)
    }, 1000) 
}

function win(arrBlocks){
    if(arrBlocks.every(block => block.firstChild)){
        const win = showModalWindow();
        const h2 = document.createElement('h2');
        h2.innerText = 'Вы выиграли!';
        win.append(h2)
    }
}

export {loose, win}