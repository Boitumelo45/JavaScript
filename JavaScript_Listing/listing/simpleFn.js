"use strict";

//A = P(1 + rt)
let r = 10.5, t = 5, p = 200;

//function definition (without using arrow function)
var A = function(r,t,p){
    return p*(1 + (r/100)*t);
}

console.log(A(r,t,p));
