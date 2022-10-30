// explore.js

window.addEventListener('DOMContentLoaded', init);

function populateVoiceList() {
  if (typeof speechSynthesis === 'undefined') {
    return;
  }

  const voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}

function init() {
  // populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const textDoc = document.getElementById('text-to-speak');

  var img = document.querySelector('img[src="assets/images/smiling.png"]');


  const button = document.querySelector('button');
  
  button.addEventListener('click', function(){
    var message = new SpeechSynthesisUtterance(textDoc.value);
    // img.src = '/assets/images/smiling-open.png';
    
    const option = document.getElementById('voice-select').selectedIndex;
    const voices = speechSynthesis.getVoices()[option-1];
    message.voice = voices;
    
    speechSynthesis.speak(message);
    img.src = '/assets/images/smiling-open.png';

    message.addEventListener('end', function(){
      img.src = '/assets/images/smiling.png';
    });
  
  });

  
  // if(speechSynthesis.speaking == true){
  //   img.src = '/assets/images/air-horn.svg';
  // }

  

  

  
}


