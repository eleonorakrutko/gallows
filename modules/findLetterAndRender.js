import renderLetter from "./renderLetter.js";

function findLetterAndRender(splitWord, validate, arrBlocks){
    return function(){
        const enteredLetter = validate();
        if(enteredLetter){
            console.log(splitWord)
            splitWord.forEach((letterWord, index) => {
                if(letterWord === enteredLetter && !arrBlocks[index].firstChild){
                    renderLetter(arrBlocks[index], enteredLetter);
                } 
            })
        }
    }
}

export default findLetterAndRender