"use strict"

//truncate rounds and removes all decimal points
var guess = (number) =>{
  if (number == Math.trunc((Math.random()*10))){
    console.log("You chose " + number +" JackPot!!!")
  }
}

//Guess number between 0 - 10
let guessNumbers = [1,2,3,4,5,6,7,8,9,10]

guessNumbers.forEach((element) => {
    guess(element)
})
