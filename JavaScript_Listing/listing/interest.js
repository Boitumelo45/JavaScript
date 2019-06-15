"use strict";

//A = P(1 + rt)
let r = 10.5, t = 5, p = 200;

var A = (r,t,p) => {
  return p*(1 + (r/100)*t);
}

let interest = A(r,t,p);
console.log("R200 (interest in 5 years at at interest rate of 10.5% = R" + interest + "-00)");
