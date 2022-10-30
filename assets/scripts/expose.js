// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const img = document.querySelector('img[src="assets/images/no-image.png"]');
  const option = document.getElementById('horn-select');
  const audio = document.querySelector('audio');
  const getRange = document.getElementById('volume');
  // const volumnImg = document.getElementById('image2');
  const volumnImg = document.getElementById('volume-controls').querySelector('img');

  const jsConfetti = new JSConfetti({option});

  option.addEventListener('change', function(){
    if(option.value == "air-horn"){
      img.src = '/assets/images/air-horn.svg';
      audio.src = '/assets/audio/air-horn.mp3'
    }
    else if(option.value == "car-horn"){
      img.src = '/assets/images/car-horn.svg';
      audio.src = '/assets/audio/car-horn.mp3'
    }
    else if(option.value == "party-horn"){
      img.src = '/assets/images/party-horn.svg';
      audio.src = '/assets/audio/party-horn.mp3'
    }
  });


  
  const button = document.querySelector('button');
  button.addEventListener('click', function(){
    if(option.value == "party-horn"){
      audio.play();
      jsConfetti.addConfetti();
    }
    else{
      audio.play();
    }
  });

  getRange.addEventListener('change', function(){
    if(getRange.value == 0){
      volumnImg.src = '/assets/icons/volume-level-0.svg';

      audio.volume = 0;
    }
    else if(getRange.value >= 1 && getRange.value < 33){
      volumnImg.src = '/assets/icons/volume-level-1.svg';

      audio.volume = getRange.value / 100; 
    }
    else if(getRange.value >= 33 && getRange.value < 67){
      volumnImg.src = '/assets/icons/volume-level-2.svg';
      audio.volume = getRange.value / 100; 
    }
    else if(getRange.value >= 67){
      volumnImg.src = '/assets/icons/volume-level-3.svg';
      audio.volume = getRange.value / 100; 
    }

  });


  //  .then(() => console.log('Confetti animation completed!'))



  



  


}
