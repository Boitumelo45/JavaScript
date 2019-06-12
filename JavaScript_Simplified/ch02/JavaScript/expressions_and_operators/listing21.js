"use strict"

//object point p = {}
var p = {
  //x and y are read-write data properties
  x : 1.0,
  y : 1.0,

  //r is read-write accessor property with getter and setter
  get r(){
    return (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))).toFixed(3)
  },
  set r(newValue){
    var oldValue = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    var ratio = newValue/oldValue
    this.x *= ratio
    this.y *= ratio
  }
}


console.log(p.r);
console.log(Object.getOwnPropertyDescriptor(p, "r"));
