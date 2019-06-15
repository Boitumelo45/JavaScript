"use strict";

/*
  We use arrays to contain multiple variables values instead of declaring a thousand of them.
*/

let array = ["John", "Doe", 34, "X", "USA", "Nevada", "Porsche 911"];
let results = [] //empty array

/*
  add elements into array
  array.push(value)
*/

for(let i = 0; i < array.length; i++){
    results.push(array[i]);
}

console.log("Length of results[]: ", results.length);
console.log(results);
