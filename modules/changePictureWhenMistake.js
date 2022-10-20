
function changePictureWhenMistake(arrImgs, objMistakes, rightWord){
    arrImgs[objMistakes.mistake].deletePicture();
    objMistakes.mistake++
    arrImgs[objMistakes.mistake].addPicture();
}

export default changePictureWhenMistake