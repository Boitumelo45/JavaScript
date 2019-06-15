"use strict"

//change card function
var changeCard = (card_) => {
		card_.suit = "Clubs"
}

let card = {
    suit: "Hearts",
    value: "Queen"
}

console.log(card) // {suit: "Hearts", value: "Queen"}

changeCard(card)
console.log(card)  // {suit: "Clubs", value: "Queen"}
