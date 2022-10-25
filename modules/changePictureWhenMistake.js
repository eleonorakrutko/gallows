import { loose } from "./endGame.js";
function changePictureWhenMistake(arrImgs, objMistakes, rightWord){
    arrImgs[objMistakes.mistake].deletePicture();
    objMistakes.mistake++
    arrImgs[objMistakes.mistake].addPicture();
    if(objMistakes.mistake === 3){
        loose(rightWord)
    }
}

export default changePictureWhenMistake