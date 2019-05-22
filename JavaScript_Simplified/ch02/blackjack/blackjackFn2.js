/*
  Blackjack game of cards
*/

let suits = ["Heart", "Clubs", "Diamonds", "Spades"];
let values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"];


let deck = []

for(let suitIdx = 0; suitIdx < suits.length; suitIdx++){
    for(let valueIdx = 0; valueIdx < values.length; valueIdx++){
        deck.push(values[valueIdx] + ' of ' + suits[suitIdx]);
    }
}

console.log(deck);
