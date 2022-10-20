
const wrapperLetters = document.getElementById('wrapperLetters');

function renderEmptyBlocks(arrOfSplitWord, arrBlocks){
    arrOfSplitWord.forEach(_ => {
        const block = document.createElement('div');
        block.classList = 'block';
        wrapperLetters.append(block);
        arrBlocks.push(block);
    })
}

export default renderEmptyBlocks