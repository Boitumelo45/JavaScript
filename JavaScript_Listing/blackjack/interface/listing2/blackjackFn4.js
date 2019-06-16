/*
  Blackjack game of cards
*/

//Game variables
let gameStarted = false, gameOver = false, playerWon = false, dealerCards = [], playerCards = [], dealerScore = 0, playerScore = 0, deck = []

//card variables
let suits = ["Heart", "Clubs", "Diamonds", "Spades"];
let values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"];

//DOM variables
let textArea = document.getElementById('text-area')
let newGameButton = document.getElementById('new-game-button')
let hitButton = document.getElementById('hit-button')
let stayButton = document.getElementById('stay-button')

//create deck function
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

function hide(object){
    object.style.display = 'none' //remove element
}

function unhide(object){
    object.style.display = 'inline' //revert back
}

function getCardNumericValue(card){
    switch(card.value){
        case 'Ace':
            return 1
        case 'Two':
            return 2
        case 'Three':
            return 3
        case 'Four':
            return 4
        case 'Five':
            return 5
        case 'Six':
            return 6
        case 'Seven':
            return 7
        case 'Eight':
            return 8
        case 'Nine':
            return 9
        default:
            return 10
    }
}

function checkForEndGame(){
    updateScore()

    if(gameOver){
        //let dealer take card
        while(dealerScore < playerScore && playerScore <= 21 && dealerScore <= 21){
                dealerCards.push(getNextCard())
                updateScore()
                alert(dealerScore)
        }
    }

    if(playerScore > 21){
        playerWon = false
        gameOver = true
    }else if(dealerScore > 21){
        playerWon = true
        gameOver = true
    }else if(gameOver){
        if(playerScore > dealerScore){
            playerWon = true
        }else{
            playerWon = false
        }
    }
}

function updateScore(){
    dealerScore = getScore(dealerCards)
    playerScore = getScore(playerCards)
}

function getScore(cardArray){
    let score = 0
    let hasAce = false
    for (var i = 0; i < cardArray.length; i++) {
        let card = cardArray[i]
        console.log(card);
        score += getCardNumericValue(card)
        if(card.value === 'Ace'){
            hasAce = true
        }
    }
    if(hasAce && score + 10 <= 21){
        return score + 10
    }

    return score
}

function showStatus(){
    if(!gameStarted){
        textArea.innerText = "Welcome to BlackJack!"
        return;
    }

    console.log("Debugging")
    console.log(dealerCards, playerCards) //debugging

    let dealerCardString = ''
    console.log("Dealer cards:");
    for (let i = 0; i < dealerCards.length; i++) {
        dealerCardString += getCardString(dealerCards[i]) + '\n'
        console.log(dealerCards[i])
    }

    let playerCardString = ''
    console.log("Player cards:");
    for (let i = 0; i < playerCards.length; i++) {
        playerCardString += getCardString(playerCards[i]) + '\n'
        console.log(playerCards[i])
    }

    updateScore()

    textArea.innerText =
        'Dealer has:\n' +
        dealerCardString +
        '(score: ' + dealerScore + ')\n\n'+

        'Player has:\n' +
        playerCardString +
        '(score: ' + playerScore + ')\n\n'

    if(gameOver){
        if(playerWon){
            textArea.innerText = "You WIN!"
        }else{
            textArea.innerText = "DEALER WINS!"
        }

        unhide(newGameButton)
        hide(hitButton)
        hide(stayButton)
    }


}

//shuffle deck
function shuffleDeck(deckOfCards){
    for(let i = 0; i < deckOfCards.length; i++){
        let swapIdx = Math.trunc(Math.random()* deckOfCards.length)
        let tmp = deckOfCards[swapIdx];
        deckOfCards[swapIdx] = deckOfCards[i]
        deckOfCards[i] = tmp
    }
}


//new game function
function newGame(textObject, newGameButtonObject, hitButtonObject, stayButtonObject){

    gameStarted = true
    gameOver = false    //this is redundant
    playerWon = false

    //create card deck
    deck = createDeck()

    //shuffle deck
    shuffleDeck(deck)

    //player cards
    for(let i = 0; i < 2; i++){
        playerCards.push(getNextCard())
    }
    console.log("Player cards: " + playerCards);
    //dealer cards
    for(let i = 0; i < 2; i++){
        dealerCards.push(getNextCard())
    }
    console.log("Dealer cards: " + dealerCards);

    textObject.innerText = "Started..."
    //hide newGameButton
    hide(newGameButtonObject)
    //unhide stay and hit button
    unhide(hitButtonObject)
    unhide(stayButtonObject)

    //status
    showStatus()
}

//start hide hit and stay button
hide(hitButton)
hide(stayButton)

newGameButton.addEventListener('click', function(){
    newGame(textArea, newGameButton, hitButton, stayButton)
})

hitButton.addEventListener('click', function(){
    playerCards.push(getNextCard())
    checkForEndGame()
    showStatus()
})

stayButton.addEventListener('click', function(){
    gameOver = true
    checkForEndGame()
    showStatus()
})
