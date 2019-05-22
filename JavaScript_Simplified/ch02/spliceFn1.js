"use strict";

let array = ["cobol", "c#", ".NET", "Python"];

/*
  delete the first three elements of the array and mutating the array
  using splice()
*/

let deleted = array.splice(0,3, "Java", "C", "Nim", "Objective C", "Swing");
console.log(array, deleted);
