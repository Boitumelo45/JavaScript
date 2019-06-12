//setter
var person = {
  firstName : "John",
  lastName : "Doe",
  language : "en",
  set lang(lang){
    this.language = lang
  }
}

//set the object property using a setter

person.lang = "en"
console.log(person.language);
