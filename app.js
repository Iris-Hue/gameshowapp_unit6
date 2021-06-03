/*/////////////////////////////////////
        Added needed variables
////////////////////////////////////*/
const keyboard = document.getElementById('qwerty')
const phrase = document.getElementById('phrase')
const startgame = document.getElementsByClassName('btn__reset')
const overlay = document.getElementById('overlay'); //hide screen overlay


var missed = 0;

/*/////////////////////////////////
    create array of name of pharses
////////////////////////////////*/
let phrases = [
    'big hearted',
    'life grows on',
    'avid gamer',
    'men in black',
    'refactoring'
];

/*////////////////////////////////
        event handlers
/////////////////////////////////*/
startgame[0].addEventListener('click', () => { //start game
    overlay.style.display ='none';      //hide startscreen
});
keyboard.addEventListener('click', (e) => {
    if(e.target.tagName ==='BUTTON') {
    e.target.className = 'chosen';
    e.target.disable = true;
}});

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
    if (arr[i] === ' ') {
    li.classList.add('space');
}else {
    li.classList.add('letter');
}
}
}
addPhraseToDisplay(newPhraseArray);

/*////////////////////////////////////////////
    checkbox function inside an eventlistener
///////////////////////////////////////////*/
    const letters = document.querySelectorAll('.letter');
    const checkLetter = (button) => {
        let matched = null;
        for (i = 0; i < letters.length; i ++){
        if (button === letters[i].textContent.toLowerCase()) {
            letters[i].classlist.add('show');
            matched = true;
}
}
    return matched;
}
/*///////////////////////////////////////
        conditional to filter out clicks
///////////////////////////////////////*/
const match = checkLetter(e.target.textContent.toLowerCase());
if (match) === null) {
    liveHeart[missed].src = 'images/lostHeart.png';
    missed++;
}
