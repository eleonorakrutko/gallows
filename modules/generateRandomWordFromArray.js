const arrayOfRandomWord = ['яблоко', 'телефон', 'программист', 'машина', 'работа', 'отдых', 'компьютер', 'смузи', 'валерчик', 'вейп'];

function randomWord (){
    return arrayOfRandomWord[Math.round(Math.random() * (arrayOfRandomWord.length -1))];
}

export default randomWord;