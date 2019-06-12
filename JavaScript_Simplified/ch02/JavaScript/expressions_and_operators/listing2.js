"use strict";
/*
  [ 1 2 3
    4 5 6
    7 8 9]
*/
var matrix = [[1,2,3], [4,5,6], [7,8,9]];
for(var i = 0; i < matrix.length; i++){
  for(var j = 0; j < matrix[i].length; j++){
    matrix[i][j] = matrix[i][j]*2;
  }
}

console.log(matrix)
//[ [ 2, 4, 6 ], [ 8, 10, 12 ], [ 14, 16, 18 ] ]
