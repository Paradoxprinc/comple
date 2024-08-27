// Funzione per aprire la finestra modale
function openModal() {
    document.getElementById('modal').style.display = "block";
}

// Funzione per chiudere la finestra modale
function closeModal() {
    document.getElementById('modal').style.display = "none";
}

// Funzione per sbloccare la stanza se la parola chiave è corretta
function unlockRoom() {
    var input = document.getElementById('passwordInput').value;
    
    if (input === "happyb") {
        alert("Camera Tua è stata sbloccata!");
        closeModal();
        // Reindirizza alla pagina della stanza
        window.location.href = 'stanzaaure.html';
    } else {
        alert("Parola chiave errata. Riprova!");
    }
}

// Codice per gestire la riproduzione audio
document.getElementById('audioButton').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    if(audio.paused){
        audio.play();
    } else {
        audio.pause();
    }
});
