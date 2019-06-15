"use strict"

//object person
let person = {
  name : "x",
  surname: "y",
  age: 0,
  occupation: "a",
  vehicle: "b"
}

console.log(person); // name: 'x', surname: 'y', age: 0, occupation: 'a', vehicle: 'b' }

var keys = Object.keys(person) //[ 'name', 'surname', 'age', 'occupation', 'vehicle' ]

var myInformation = ['John', 'Doe', 29, 'Engineer', 'Porsche 911']

let count = 0 //count values

keys.forEach((key) => {
  person[key] = myInformation[count]
  count++
})

console.log(person);
/*
{ name: 'John',
  surname: 'Doe',
  age: 29,
  occupation: 'Engineer',
  vehicle: 'Porsche 911' }
*/
