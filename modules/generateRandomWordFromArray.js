const arrayOfRandomWord = ['яблоко', 'телефон', 'программист', 'машина', 'работа', 'отдых', 'компьютер', 'смузи', 'валерчик', 'вейп'];

function randomWord (){
    return (Math.random() * (arrayOfRandomWord.length -1));
}
export default randomWord;