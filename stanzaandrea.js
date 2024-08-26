document.getElementById('audioButton').addEventListener('click', function() {
    var audio = document.getElementById('audio');
   if(audio.paused){
    audio.play();
}else{
    audio.pause();
}
});