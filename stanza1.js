const digits = document.querySelectorAll('.digit');
let currentDigit = 0;

document.querySelectorAll('.key').forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('clear')) {
            // Cancella l'ultimo inserimento
            if (currentDigit > 0) {
                currentDigit--;
                digits[currentDigit].value = '';
            }
        } else {
            if (currentDigit < digits.length) {
                digits[currentDigit].value = this.textContent;
                currentDigit++;
            }
        }
    });
});

document.getElementById('submit-button').addEventListener('click', function() {
    let userAnswer = '';
    digits.forEach(digit => {
        userAnswer += digit.value;
    });

    const correctAnswer = "2908";
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Bravissima, sei riuscita ad entrare in SALONE!";
        document.getElementById('feedback').style.color = "green";
        setTimeout(function() {
            window.location.href = 'salone.html'; // Modifica con il link alla prossima pagina
        }, 3500);
    } else {
        document.getElementById('feedback').textContent = "Sbagliato, riprova!";
        document.getElementById('feedback').style.color = "red";
        // Resetta il campo per una nuova prova
        currentDigit = 0;
        digits.forEach(digit => digit.value = '');
    }
});
