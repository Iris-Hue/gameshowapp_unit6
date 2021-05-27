/*/////////////////////////////////////
        Added needed variables
////////////////////////////////////*/

const keyboard = document.getElementById('qwerty')
const phrase = document.getElementById('phrase')
const startgame = document.getElementsByClassName('btn__reset')
const overlay = document.getElementById('overlay');
var missed = 0; //hide screen overlay

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


overlay.addEventListener('click',() = > {
    if(overlay.style.display = ='none'){
});
