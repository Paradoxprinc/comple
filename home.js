document.getElementById('button').addEventListener('click', function() {
    // Reindirizza alla prima stanza dell'escape room
    window.location.href = 'stanza1.html';
});
document.getElementById('audioButton').addEventListener('click', function() {
    var audio = document.getElementById('audio');
   if(audio.paused){
    audio.play();
}else{
    audio.pause();
}
});
