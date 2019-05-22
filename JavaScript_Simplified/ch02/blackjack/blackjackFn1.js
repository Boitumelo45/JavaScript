/*
  Blackjack game of cards
*/

let deck = [
    "Ace of Spades",
    "Two of Spades",
    "Three of Spades"
]

let playerCards = [deck[0], deck[2]];

console.log("Welcome to Blackjack");
console.log("You are dealt: ");
playerCards.forEach((element) => {
    console.log("\t" + element);
})
