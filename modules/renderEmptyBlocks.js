import splitWord from "./splitWord.js";

const wrapperLetters = document.getElementById('wrapperLetters');
function renderEmptyBlocks(arrBlocks){
    splitWord().forEach(_ => {
        const block = document.createElement('div');
        block.classList = 'block';
        wrapperLetters.append(block);
        arrBlocks.push(block);
    })
}

export {renderEmptyBlocks}
