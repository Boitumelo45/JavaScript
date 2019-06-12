"use strict"


var list = [1]

try{
  list.forEach((element) => {
    return element + unknown_variable
  })
}catch (e){
    console.log(e);
}finally{
    console.log("run anyway");
}
