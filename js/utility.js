function hiddenElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// -------------------------------------------

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

// --------------------------------------------------

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#FFA500]')
}

// ----------------------------------------------------

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#FFA500]')
}

// ---------------------------------------------------

function getARandomAlphabet(){
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    
    // get a random index between 0 - 25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
   

    const alphabet = alphabets[index];
    return alphabet;
}

// ---------------------------------------------------

function getInnerContent(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

// ----------------------------------------

function getInnerNumber(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementNumber = parseInt(elementText);

    return elementNumber;
}

function setInnerNumber(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}