/*
  Blackjack game of cards
*/

let suits = ["Heart", "Clubs", "Diamonds", "Spades"];
let values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"];

let textArea = document.getElementById('text-area')
let newGameButton = document.getElementById('new-game-button')
let hitButton = document.getElementById('hit-button')
let stayButton = document.getElementById('stay-button')

function hide(object){
    object.style.display = 'none' //remove element
}

function unhide(object){
    object.style.display = 'inline' //revert back
}

function newGame(textObject, newGameButtonObject, hitButtonObject, stayButtonObject){
    textObject.innerText = "Started..."
    //hide newGameButton
    hide(newGameButtonObject)
    //unhide stay and hit button
    unhide(hitButtonObject)
    unhide(stayButtonObject)
}
//start hide hit and stay button
hide(hitButton)
hide(stayButton)

newGameButton.addEventListener('click', function(){
    newGame(textArea, newGameButton, hitButton, stayButton)
})

function createDeck(){
    /*
        Creates a deck of 52 cards
    */
    let deck = [] //crear deck
    for(let suitIdx = 0; suitIdx < suits.length; suitIdx++){
        for(let valueIdx = 0; valueIdx < values.length; valueIdx++){
            let card = {
                    suit : suits[suitIdx],
                    value: values[valueIdx]
            }
            deck.push(card);
        }
    }
        return deck
}

let deck = createDeck()
//console.log(deck);

function getNextCard(){
    /*Moves to the next card from the card on top*/
    return deck.shift()
}

var getCardString = (card) =>{
    /*
        takes object { suit: "v1", valueL "v2"}
        returns: v2 of v1
    */
    return card.value + ' of ' + card.suit
}

let playerCards = []

for(let i = 0; i < 2; i++){
    playerCards.push(getCardString(getNextCard()))
}

console.log("Welcome to BlackJack Game!");
console.log("You are dealt: ");
console.log(playerCards);
