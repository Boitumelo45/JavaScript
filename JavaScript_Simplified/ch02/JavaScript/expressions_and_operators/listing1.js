"use strict";

//primary expression
1.23;

//object

/*
  [ 1 2 3
    4 5 6
    7 8 9]
*/

var matrix = [[1,2,3], [4,5,6], [7,8,9]];

matrix.forEach((element) => {
  element.forEach((arr)=>{
    console.log(arr);
  })
})
