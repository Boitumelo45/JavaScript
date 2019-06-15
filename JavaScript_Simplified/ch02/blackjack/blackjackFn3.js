/*
  Blackjack game of cards
*/

let suits = ["Heart", "Clubs", "Diamonds", "Spades"];
let values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"];


function createDeck(){
    let deck = [] //crear deck
    for(let suitIdx = 0; suitIdx < suits.length; suitIdx++){
        for(let valueIdx = 0; valueIdx < values.length; valueIdx++){
            deck.push(values[valueIdx] + ' of ' + suits[suitIdx]);
        }
    }
        return deck
}

let deck = createDeck()
//console.log(deck);

function getNextCard(){
    return deck.shift()
}


let playerCards = []

for(let i = 0; i < 2; i++){
    playerCards.push(getNextCard())
}

console.log(playerCards);
