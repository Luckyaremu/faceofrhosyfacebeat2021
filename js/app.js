// Keeps track of a winner
let winner = false;

// Get a reference to the cards div
const cards = document.querySelector('.cards');

// Render cards
cards.innerHTML = getCards();

// Get a reference to the cards buttons
const cardButtons = document.querySelectorAll('.card-btn');

// Get a reference to the Trump votes span
const trumpVotesEl = document.querySelector('.votes-number-trump');

// Get a reference to the Biden votes span
const bidenVotesEl = document.querySelector('.votes-number-biden');

// Get a reference to the Biden votes span
const rhoda1VotesEl = document.querySelector('.votes-number-rhoda1');

// Get a reference to the Biden votes span
const rhoda2VotesEl = document.querySelector('.votes-number-rhoda2');

// Get a reference to the Biden votes span
const rhoda3VotesEl = document.querySelector('.votes-number-rhoda3');

// Get a reference to the Biden votes span
const rhoda4VotesEl = document.querySelector('.votes-number-rhoda4');

// Get a reference to the Biden votes span
const rhoda5VotesEl = document.querySelector('.votes-number-rhoda5');

// Get a reference to the Biden votes span
const rhoda6VotesEl = document.querySelector('.votes-number-rhoda6');


// Set event listener for the vote buttons
cardButtons.forEach(cardButton => {
    cardButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-trump')) {
            addVote(0, 'trump', trumpVotesEl)
        } else {
            addVote(0, 'biden', bidenVotesEl)
        }
        
    })
})