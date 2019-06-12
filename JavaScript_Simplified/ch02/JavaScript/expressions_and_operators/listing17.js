"use strict"

var o = Object.create({
  "name" : "john",
  "surname" : "Doe",
  "age": 32,
  "occupation": "Dev"
});

try{
    var o1 = inherit(o) //this gives an error
    console.log(o1.name, o1.surname, o1.age, o1.occupation)
}catch (e){
  //pass
}finally{
  //pass
}
