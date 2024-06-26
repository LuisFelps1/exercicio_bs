document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.card');

    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            alert('Você clicou no ' + this.querySelector('.card-title').innerText);
        });
    });
});
