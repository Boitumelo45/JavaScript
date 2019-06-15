"use strict"

let cards = [

    {
        suit : "Hearts",
        value: "Queen"
    },

    {
        suit: "Clubs",
        value: "King"
    },

    {
        suit: "Diamonds",
        value: "King"
    }
]

let numberOfCards = cards.length //3
for(let i = 0; i < numberOfCards; i++){
    console.log(cards[i].value + " of " + cards[i].suit)
}

/*
    Queen of Hearts
    King of Clubs
    King of Diamonds
*/
