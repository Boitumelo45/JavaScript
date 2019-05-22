"use strict";

let array = ["cobol", "c#", ".NET", "Python"];

/*
  delete the first three elements of the array
*/

let languages_depricated = array.splice(0,3);
console.log(array, languages_depricated);
