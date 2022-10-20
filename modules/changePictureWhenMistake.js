import { loose } from "./endGame.js";
function changePictureWhenMistake(arrImgs, objMistakes, rightWord){
    arrImgs[objMistakes.mistake].deletePicture();
    objMistakes.mistake++
    arrImgs[objMistakes.mistake].addPicture();
    loose(objMistakes, rightWord)
}

export default changePictureWhenMistake