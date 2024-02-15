function paly() {
    const homeSection = document.getElementById('homescreen');
    homeSection.classList.add('hidden');

    const playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden');
    continueGame();
}

function handleKeyboardButtonPress(event){
    const playerPadded = event.key;
    console.log ('player pressed',playerPadded);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase ();
    console.log(playerPadded. expectedAlphabet);

    if(playerPadded === expectedAlphabet){
        console.log('you are a point');
        continueGame();
        removeBackgroundColorById(expectedAlphabet); 
    }else{
        console.log('you missed, you lost a life.')
    }

}
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame(){
    const alphabet = getARandomAlphabet ();
    console.log ('Your random alphabet', alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBgColorById(alphabet)
}