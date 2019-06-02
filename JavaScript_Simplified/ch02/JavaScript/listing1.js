"use strict";
/*
  numbers
  booleans
  null
  undefined
  strings
  object
*/

var none;
//array
var primitive = ["john", 2, 3.1, true, none, null];
console.log(primitive, ' : ', typeof(primitive));

//for-loop
primitive.forEach((element) =>{
  console.log("Element: ", element, "\t:", typeof(element))
})
