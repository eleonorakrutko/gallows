const blackList = [];

function validateEntertValue (enterLetter){
    return function(){
        let letter = enterLetter.value.toLowerCase();
        if((letter.match(/[а-яё]/))){
            if (blackList.includes(letter)) {
                alert('Вы уже вводили этот символ!')
                enterLetter.value = null;
                return null;        
            }
            blackList.push(letter);
            enterLetter.value = null;
            return letter;
        } else {
            alert('Введите корректное значение!')
            enterLetter.value = null;
            return null
        }
    }
}

export default validateEntertValue;