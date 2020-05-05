let muted = false;

// let audioPlaying = new Audio(`sounds/${e.keyCode}.mp3`)

let audioPlaying = {
    
};

const pressKey = document.onkeydown = (e) => {

    let button = document.getElementById(e.keyCode);

    let audio =  new Audio(`sounds/${e.keyCode}.mp3`)

    if(e.keyCode in audioPlaying) {
        return;
    }

    audioPlaying[e.keyCode] = audio;

    audio.muted = muted;

  if(typeof(button) !='undefined' && button != null) {
      button.classList.add('active');
      audio.play(); 
  }
  console.log(e);
  console.log('sounds/' + e.keyCode + '.mp3');
}

const releaseKey = document.onkeyup = (e) => {

    let button = document.getElementById(e.keyCode);
  
  if(typeof(button) !='undefined' && button != null) {
      button.classList.remove('active');
      audioPlaying[e.keyCode].pause();
      delete audioPlaying[e.keyCode];
  }
}


const toggleMute = () => {
    
    muteButton = document.getElementById("mute");

    let element = document.getElementById("mute");
    element.classList.toggle("togglestyle");

    if (muteButton.innerHTML === "MUTE") {
        muteButton.innerHTML = "MUTED";
      } else {
        muteButton.innerHTML = "MUTE";
      }

    if(muted){
        muted = false;
        for(const property in audioPlaying) {
            audio = audioPlaying[property];
            audioPlaying[property].play();
            console.log(`${property}: ${audioPlaying[property]}`);
        }
    } else {
        muted = true;
        for(const property in audioPlaying) {
            audio = audioPlaying[property];
            audioPlaying[property].pause();
            console.log(`${property}: ${audioPlaying[property]}`);
        }
    }
    console.log(muted);



};

