"use strict";

//date object
var then = new Date(1990, 8, 26);
var now = new Date();

console.log(then, ", ", now);
var age = ((((((now - then)/1000)/60)/60)/24)/365) //milliseconds to years
console.log("My age: " + Math.ceil(age), " years old");
//My age: 29  years old
