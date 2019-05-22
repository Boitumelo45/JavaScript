/*
  Blackjack game of cards
*/

let card1 = "Ace of Spades", card2 = "Ten of hearts";
let cards = [card1, card2];

console.log("Welcome to Blackjack");
console.log("You are dealt: ");
cards.forEach((element) => {
    console.log("\t" + element);
})
