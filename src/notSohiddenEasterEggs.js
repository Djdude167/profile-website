document.getElementById("Pencil").addEventListener("click", funFact);
document.getElementById("Triangle1").addEventListener("click", homeDepot);

var playPause = false;
var audio = new Audio('/src/audio.mp3');

function funFact() {
  alert ("This was originally named \"Penil\" by mistake.");
}

function homeDepot() {
    playPause = !playPause;
    if (playPause) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
}