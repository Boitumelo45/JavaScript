"use strict";

let array = ["John", "Doe", 34, "X", "USA", "Nevada", "Porsche 911"];
/*
 remove elements from an array
 array.pop(); //removes last value
*/
while(array.length > 0){
        array.pop();
}

console.log("Length of array: ", array.length);
console.log(array);
