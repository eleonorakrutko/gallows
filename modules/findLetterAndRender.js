import renderLetter from "./renderLetter.js";
import changePictureWhenMistake from "./changePictureWhenMistake.js";
import { win } from "./endGame.js";
function findLetterAndRender(splitWord, validate, arrBlocks, arrImgs, objMistakes, rightWord){
    return function(){
        const enteredLetter = validate();
        if(enteredLetter){
            console.log(splitWord)
            splitWord.forEach((letterWord, index) => {
                if(letterWord === enteredLetter && !arrBlocks[index].firstChild){
                    renderLetter(arrBlocks[index], enteredLetter);
                    win(arrBlocks, rightWord)
                } 
            })
            if(!splitWord.includes(enteredLetter)){
                changePictureWhenMistake(arrImgs, objMistakes, rightWord);
            }
        }
    }
}

export default findLetterAndRender