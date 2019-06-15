"use strict"

var add = (a, b)=>{
  return a+b
}
console.log("Sum = ", add(2,3));

var list = [1,2,3,4,5];

for(var i = 0; i < list.length; i++){
  console.log('[', i, '] :', list[i])
}

list.forEach((element)=>{
  console.log(element * 2)
})

let PI = 3.1415;
PI = PI*2;
console.log(PI);
