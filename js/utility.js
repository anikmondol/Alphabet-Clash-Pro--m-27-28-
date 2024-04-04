function setClassList(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}


function removeClassList(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}