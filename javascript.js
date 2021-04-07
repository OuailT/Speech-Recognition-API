const MessageEl = document.getElementById("msg");

const randomNum = getRandomNum();

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();


//Start Recognition and Game
recognition.start();

// Capture what the user speaks
function onSpeak(e) {
    const msg = e.results[0][0].transcript;
    writeMessage(msg);
}

//write User speaks
function writeMessage(msg) {
    MessageEl.innerHTML = `<div>You said :</div> <span class="box">${msg}</span>`;
}

//Check message Against text
function CheckNumber(msg) {
    const num = msg;

    //Check if Valid Number
    if(Number.isNaN(num)) {
        MessageEl.innerHTML = '<div>That is not a valid number</div>';
        return;
    }







}



//Generate a Random number
function getRandomNum () {
    return Math.floor(Math.random()* 100) + 1;
}

//Event Listener 

//Speak result
recognition.addEventListener('result', onSpeak);


