function paly() {
    const homeSection = document.getElementById('homescreen');
    homeSection.classList.add('hidden');

    const playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden');
    continueGame();
}
function continueGame(){
    const alphabet = getARandomAlphabet ();
    console.log ('Your random alphabet', alphabet)
}