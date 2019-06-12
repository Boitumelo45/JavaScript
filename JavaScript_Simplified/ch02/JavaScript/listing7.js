"use strict";

var list = [1, 2, 3, 4, 5];

var square = function(array){
  let tempArray = [];
  array.forEach((element) => {
    tempArray.push(element*2);
    console.log(tempArray);
  })

  return tempArray;
}

square(list);
