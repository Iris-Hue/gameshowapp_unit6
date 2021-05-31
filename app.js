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
let pharses = [
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
    const randomNumber = Math.floor (Math.random()* pharses.length);
    return randomNumber;
}
const getRandomPhraseAsArray = arr => {
let randomPhrase = arr[getRandomNumber()];
return phraseArray = randomPhrase.split([,]);  /*split charactors */
 }
const newPhraseArray = getRandomPhraseAsArray(pharses);

/*//////////////////////////////////////
        function to display charactors
//////////////////////////////////////*/
const addPhraseToDisplay = arr => {
    let ul = document.getElementsByTagName('ul')[0];
    ul.appendChild(li);
    const lis = #phrases;
for (let i = 0; i<lis.length; i+= 1) {
let li = lis [i];
if(li = 'letter') {
    li.style.display = 'letter';
}else{
    li.display = 'space';
}
}
