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
let pharse =
    ['big hearted',
    'life grows on',
    'avid gamer',
    'men in black',
    'island hopping'];


/*////////////////////////////////
        event handlers
/////////////////////////////////*/
startgame.addEventListener('click', () => {
    overlay.style.display ='none';
});


/*/////////////////////////////////
        function for random pharses
//////////////////////////////////*/
const getRandomPhrasesAsArray = arr => { //this function chooses random phrases from the array
}
const getRandomNumber = () => {
    const randmNumber = Math.floor (Math.random()* 5) +1;
    return randmNumber;
}

let counter = 0;
while (counter < 5) {
    console.log('The random number is ${getRandomNumber(5)}');
    counter += 1;
}
