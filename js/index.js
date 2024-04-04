function continueGame(){
// step -1: generate a random alphabet
const alphabet =  getARandomAlphabet();


// set randomly generated alphabet to the screen (show it)
const currentAlphabet = document.getElementById('current_alphabet');
currentAlphabet.innerText = alphabet;


// set background color
setBackgroundColorById(alphabet);


}

function play(){
    // step-1: hide the home screen
    hiddenElementById('home_screen');

    // show the playground
    showElementById('play_ground')

    // continueGame function
    continueGame();
}


