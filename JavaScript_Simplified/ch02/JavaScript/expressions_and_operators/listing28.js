//Javascript object constructor

//class
function Person(fname, lname, age, occupation){
  this.fname = fname
  this.lname = lname
  this.age = age
  this.occupation = occupation
}

//method or instantiation
var p = new Person("John", "Doe", 32, "Engineer")
console.log(p)
