// Define variables to hold card elements
let card1 = null;
let card2 = null;

function clicked(card) {
    if (card1 === null) {
        card.className = "show";
        card1 = card;
    } else if (card2 === null) {
        card.className = "show";
        card2 = card;

        // Check for match after a delay
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    // Assuming card1 and card2 are <img> elements, compare their src attributes
    if (card1.src === card2.src) {
        alert("That's a match!!");
    } else {
        // If cards don't match, flip them back after a short delay
        card1.className = "hide";
        card2.className = "hide";
    }

    // Reset cards after checking match
    card1 = null;
    card2 = null;
}
