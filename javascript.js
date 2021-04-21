const MessageEl = document.getElementById("msg");
const codeText = document.getElementById("code");




//SpeechRecognition
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();


//Start Recognition and Game
recognition.start();

// Capture what the user speaks
function onSpeak(e) {
    const msg = e.results[0][0].transcript;
    TalkTheTalk(msg);
    CheckCode(msg);
    
   
}


//Check The code To start the conversations
function CheckCode(msg) {
    const num = msg;

    //Check if The code is Valid
    if(num == 1) {
        MessageEl.innerHTML = `<div>${msg} Code is Right, How are you Today Ouail!</div>`;
        return true;
    } 

    return false;
      
}



// Talking with the APIS functions
function TalkTheTalk(msg) {
    
    if(CheckCode(1)) {
    const talk = msg;
    const greetings = ["I'm good", "I'm fine", "I'm Ok"];

     const result = greetings.find((greeting)=> {
         return greeting === talk;
        });

        if(result) {
            MessageEl.innerHTML = '<div> Im so happy to hear that! Lets play together! </div>';
            codeText.remove();
            
        }

        else {
            MessageEl.innerHTML = '<div>Sorry Ouail I didnt hear !Would you Repeat</div>';
            
        }    
    
    } 
    
}


//Event Listener 

//Speak result
recognition.addEventListener('result', onSpeak);

//End of the Service
recognition.addEventListener('end', () => recognition.start());


