//create an object

/*
    Get functions can be implemented within the
    JSON database file
*/

var person = {
  firstName : "John",
  lastName : "Doe",
  language : "en",
  get lang(){
      return this.language;
  }
}

console.log(person.lang);
