"use strict"
//class
function Simple(a,b){
  this.a = a,
  this.b = b
}

//method 1
Simple.prototype.sum = function(){
  return (this.a + this.b)
}

//instantiation
var d = new Simple(12,2)
console.log(d.sum())

//manipulating the DOM
var h = document.getElementById('h_1')
h.innerText = "Version " + (d.sum()).toString()
