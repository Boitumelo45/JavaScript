"use strict";

//classes in javascript
function Point(x, y){
  /*
    constructor always starts with a capital letter
  */
  this.x  = x; //initialization of input parameters
  this.y = y;
};

/*
  Define methods for Point(x, y)
*/
Point.prototype.r = function(){
  return Math.sqrt(this.x * this.x + this.y * this.y);
};


//instantiation
var p = new Point(4,3);

console.log(p);
console.log("r of (4,3) = ", p.r());
