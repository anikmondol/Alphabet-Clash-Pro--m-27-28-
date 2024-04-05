document.addEventListener('keyup', function (event) {

    //get player to pressed 
    const playerPressed = event.key;

    // key player is expected to pressed
    const currentAlphabet = getInnerContent('current_alphabet');
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check right or wrong key pressed
    if (playerPressed === expectedAlphabet) {

        // get current score
        const currentScore = getInnerNumber('current_score');

        // update life score
        const newScore = currentScore + 1;

        // set new life score
        setInnerNumber('current_score', newScore)


        // clear perused click element background
        removeBackgroundColorById(expectedAlphabet);


        // continueGame function call
        continueGame();



    } else {

        // get current life
        const currentLife = getInnerNumber('current_life');

        // set new update life
        const upDateLife = currentLife - 1;

        // display new element in website
        setInnerNumber('current_life', upDateLife)


        if (upDateLife === 0) {
            gameOver();
        }
    }



})


// ---------------------------------------------------

function continueGame() {
    // step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();


    // set randomly generated alphabet to the screen (show it)
    const currentAlphabet = document.getElementById('current_alphabet');
    currentAlphabet.innerText = alphabet;


    // set background color
    setBackgroundColorById(alphabet);

}


// -----------------------------------------------------

function play() {
    // hide the home screen and 
    hiddenElementById('home_screen');
    hiddenElementById('show_score');

    // show the playground
    showElementById('play_ground')

    // reset previous life and score
    setInnerNumber('current_life', 5);
    setInnerNumber('current_score', 0)


    // continueGame function
    continueGame();
}


// ------------------------


function gameOver() {
    hiddenElementById('play_ground');
    showElementById('show_score');

    // update final score
    const lastScore = getInnerNumber('current_score');
    setInnerNumber('last_score', lastScore);


    // clear the last selected alphabet highlight

    const currentAlphabet = getInnerContent('current_alphabet');
    removeBackgroundColorById(currentAlphabet);

}