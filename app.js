/*/////////////////////////////////////
        Added needed variables
////////////////////////////////////*/
const keyboard = document.getElementById('qwerty')
const phrase = document.getElementById('phrase')
const startgame = document.getElementsByClassName('btn__reset')
const overlay = document.getElementById('overlay'); //hide screen overlay
const li = document.createElement('li');

var missed = 0;

/*/////////////////////////////////
    create array of name of pharses
////////////////////////////////*/
let phrases = [
    'big hearted',
    'life grows on',
    'avid gamer',
    'men in black',
    'island hopping'
];

/*////////////////////////////////
        event handlers
/////////////////////////////////*/
startgame[0].addEventListener('click', () => {
    overlay.style.display ='none';      //hide startscreen
});

/*/////////////////////////////////
        function for random pharses
//////////////////////////////////*/

const getRandomNumber = () => {
    const randomNumber = Math.floor (Math.random()* phrases.length);
    return randomNumber;
}
const getRandomPhraseAsArray = arr => {
let randomPhrase = arr[getRandomNumber()];
return phraseArray = randomPhrase.split([,]);  /*split charactors */
 }
const newPhraseArray = getRandomPhraseAsArray(phrases);


/*//////////////////////////////////////
        function to display charactors
//////////////////////////////////////*/
const phraseUl = document.querySelector('#phrase ul');

function addPhraseToDisplay (arr) {
    for (let i = 0; i < arr.length; i ++) {
    const li = document.createElement('li');
    li.textContent = arr[i];
    phraseUl.appendChild(li);
    if (arr[i] === '') {
    li.classList.add('space');
}else {
    li.classList.add('letter');
}
}
}
addPhraseToDisplay(newPhraseArray);




    /*const phraseArray = getRandomPhraseAsArray(pharses);  addPhraseToDisplay(phraseArray);
    let ul = document.getElementsByTagName('ul')[0];
    ul.textContent = phrases.value;
    ul.appendChild(li);
    Phrases.value = ''; /*to clear the input field after each entry*/
/*    const lis = phrases;
for (let i = 0; i < lis.length; i+= 1) { /* create a loop for each letter in the phrases*/
/*let li = lis [i];
if(li = 'letter') { /*if correct letter will display letter*/
    /*li.style.display = 'letter';
}else{ /* if a space display none*/
/*    li.display = 'none';
    return addPhraseToDisplay (PhraseArray);
}
}
}
*/
