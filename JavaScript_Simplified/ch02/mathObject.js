"use strict"

var guess = (number) =>{
  if (number == (Math.random()*10).toFixed(0)){
    console.log("You chose " + number +" JackPot!!!")
  }else{
    console.log("This round: " + number + ", JackPot number: " + (Math.random()*10).toFixed(0))
  }
}

//Guess number between 0 - 10
let guessNumbers = [1,2,3,4,5,6,7,8,9,10]

guessNumbers.forEach((element) => {
    guess(element)
})
