"use strict"

//old function declaration
var squares = function(x){
  return Math.pow(x,2)
}

console.log(squares(4.5).toFixed(1));

//arrow function
var sqrs = (x) => {
  return Math.pow(x,2)
}

console.log(sqrs(4.5).toFixed(1));
