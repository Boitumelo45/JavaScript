"use strict";

array = [1,2,3,4,5];
var count = 0;
let counter = 0;

for(let i = 0; i < array.length; i++){
    count += array[i];
    counter += i;
    if(count > 5){
        var num1 = count*5;     //accessible outside this code block
        let num2 = num1*5;      //only accessible within this code block
        console.log("num1: ", num1, ',', 'num2: ', num2);
    }
    //console.log("xnum1: ", num1, ',', 'xnum2: ', num2);
    try{
        console.log("xnum1: ", num1, ',', 'xnum2: ', num2);
    }catch{
        console.log('xnum1: ', num1);   //<-- accessing num1
        console.log('xnum2: ', 'This will not print because it is not accessible'); //<-- can't access num2
    }

}
console.log('count: ', count, ',' , 'counter: ',counter); //<-- both count and counter are accessible because they are in the same code block
