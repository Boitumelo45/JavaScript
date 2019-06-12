"use strict";

var then = new Date(1990, 8, 26);
var now = new Date();
var age = ((((((now - then)/1000)/60)/60)/24)/365)
console.log(age);
console.log(age.toFixed(1));
/*
28.712586673262297
28.7
*/
