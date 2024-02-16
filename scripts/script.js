
function handleKeyboardButtonPress(event){
    const playerPadded = event.key;
    console.log ('player pressed',playerPadded);

    if(playerPadded === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase ();
    console.log(playerPadded. expectedAlphabet);

    if(playerPadded === expectedAlphabet){
        console.log('you are a point');
        console.log('you have pressed correctly', expectedAlphabet)

        const currentScore = getTextElementValueById ('current-score');
        // console.log(currentScore);
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore)


        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseFloat (currentScoreText);
        // console.log(currentScore);

        // const newScore = currentScore + 1;

        // currentScoreElement.innerText = newScore;


        continueGame();
        removeBackgroundColorById(expectedAlphabet); 
    }else{
        console.log('you missed lost a life.');

        const currentLife = getTextElementValueById('current-life');
        const updateLife = currentLife - 1;
        setTextElementValueById('current-life', updateLife);

        if(updateLife=== 0){
            gameOver();
        }

    }

}
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame(){
    const alphabet = getARandomAlphabet ();
    // console.log ('Your random alphabet', alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet)
}
function paly() {
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}