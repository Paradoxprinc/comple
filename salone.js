document.getElementById('submit-button').addEventListener('click', function() {
    
    var userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    var correctAnswer = "amuk";
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Bravissima, sei riuscita ad entrare in Cucina!";
        document.getElementById('feedback').style.color = "green";
        // Reindirizzamento alla prossima stanza dopo 2 secondi
        setTimeout(function() {
            window.location.href = 'cucina.html'; // Modifica con il link alla prossima pagina
        }, 3500);
    } else {
        document.getElementById('feedback').textContent = "Sbagliato, riprova!";
        document.getElementById('feedback').style.color = "red";
    }
});
document.getElementById('audioButton').addEventListener('click', function() {
    var audio = document.getElementById('audio');
   if(audio.paused){
    audio.play();
}else{
    audio.pause();
}
});
