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
    
    // CheckCode(msg);
    TalkTheTalk(msg);
}


//Check message Against text
function CheckCode(msg) {
    const num = msg;
    
    //Check if The code is Valid 
    if(num == 333 ) {
        MessageEl.innerHTML = `<div>${msg} Code is Right, How are you Today Ouail!</div>`;
        return;
    }

     else {
        MessageEl.innerHTML = `<div>${msg} Code is Wrong, Please Speak The Right Code To talk to me</div>`;
        return;
     }

}


// Talking with the APIS functions
function TalkTheTalk(msg) {

    const talk = msg; 

    const greetings = ["I'm good", "I'm fine", "I'm Ok"];

     const result = greetings.find((greeting)=> {
         return greeting === talk;
        });

        if(result) {
            MessageEl.innerHTML = '<div> Im so happy to hear that! What can i do for you today ! </div>';
        }
        else {
            MessageEl.innerHTML = '<div>Sorry Ouail I didnt hear !Would you Repeat</div>';
            
        }    
    
}




//Event Listener 
//Speak result
recognition.addEventListener('result', onSpeak);


