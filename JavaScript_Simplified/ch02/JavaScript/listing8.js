"use strict";

var list = [1, 2, 3, 4, 5];
console.log("\nPushing values into an array:")
var square = function(array){
  let tempArray = [];
  array.forEach((element) => {
    tempArray.push(element*2);
    console.log(tempArray);
  })

  return tempArray;
}

let newList = square(list);

//arrrow function
console.log("\nPopping values out of an array [last index]:")
var deletingIndece = (array) =>{
  let size = array.length;
  for(let i = 0; i <= size; i++){
    console.log(array);
    array.pop(); //delete the last index
  }
  return array;
}

deletingIndece(newList);

//arrrow function
console.log("\nShifting values out of an array [first index]:")
var shiftingIndece = (array) =>{
  let size = array.length;
  for(let i = 0; i <= size; i++){
    console.log(array);
    array.shift(); //delete the last index
  }
  return array;
}

shiftingIndece(list);
