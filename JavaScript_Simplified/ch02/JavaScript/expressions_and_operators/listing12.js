"use strict"


function convert(x){
  switch(typeof x){
    case 'number':
        return x.toString(16) //hexadecimal
    case 'string':
        return '"' + x + '"'
    default:
        return String(x)
  }
}

var a = convert('255')
console.log(a);
