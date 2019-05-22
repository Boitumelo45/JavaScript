"use strict";

let b = false;
let array = [1,2,3,'hello', 3.02, b];

var typeOfData = (array) =>{
  array.forEach((element) =>{
    console.log(element, 'is a ', typeof(element));
  })
}

typeOfData(array);
