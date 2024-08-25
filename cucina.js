// Seleziona l'area cliccabile che contiene la parola "chiave"
var correctArea = document.getElementById('correctArea');

// Aggiungi un event listener all'area corretta
correctArea.addEventListener('click', function() {
    // Chiave trovata
    document.getElementById('feedback').textContent = "Hai trovato la chiave! L'ascensore è ora sbloccato.";
    document.getElementById('feedback').style.color = "green";
    
    // Sblocca il pulsante dell'ascensore
    var elevatorButton = document.getElementById('elevator-button');
    elevatorButton.disabled = false;
    elevatorButton.classList.add('unlocked');
    elevatorButton.textContent = "Ascensore (Sbloccato)";

    // Permetti di cliccare sul pulsante dell'ascensore per andare al piano superiore
    elevatorButton.addEventListener('click', function() {
        window.location.href = 'piano_superiore.html'; // Modifica con il link alla prossima pagina
    });
});

// Seleziona tutte le aree sbagliate
var wrongAreas = document.querySelectorAll('#wrongArea');

// Aggiungi un event listener a ciascuna area sbagliata
wrongAreas.forEach(function(area) {
    area.addEventListener('click', function() {
        // Mostra un messaggio di errore
        document.getElementById('feedback').textContent = "Non c'è nulla qui... Prova un'altra chiave.";
        document.getElementById('feedback').style.color = "red";
    });
});
