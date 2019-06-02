/*
  X_{n} = X_{n-1} + x_{n-2}
  fibonacci rule
*/
//dictionary/hash-table/map
var fibonacci_sequence = {
  0:0,
  1:1
};


//fibonacci rule
var fib = (n) =>{
  let n1 = 0, n2 = 1;
  for(let i = 2; i <= n; i++){
    fibonacci_sequence[i] = fibonacci_sequence[i - 1] + fibonacci_sequence[i -2];
  }
}

//cache fibonacci output
var cache_fib_output = (n) =>{
  let y = n + 1;
  fibonacci_sequence.hasOwnProperty(y)? fibonacci_sequence[y]: fibonacci_sequence[y] = fib(y);
  delete fibonacci_sequence[n+1]; //over-iterates by 1 resulting in n+1: undefined
  return fibonacci_sequence[n];
}

//initial state
console.log(fibonacci_sequence);
console.log("fib(8) = " + cache_fib_output(8)); //fib of 8

//updated hash map
console.log(fibonacci_sequence)

//looking into the hash-table for cached outputs
console.log("Looking into the hash-table:");
var index  = [1, 2, 3, 4, 5, 45]; //45 does not exists in the table yet
console.log("Check if this values exists: " + index);

index.forEach((element) => {
  //check if element is found
  if(fibonacci_sequence[element] == undefined){
    //compute
    console.log(element + " does not exist.\n processing:")
    console.log("fib(" + element + ")"  + " = " + cache_fib_output(element));
  }else{
      console.log("fib(" + element + ")" + " = " + fibonacci_sequence[element]);
  }
})

//updated map
console.log(fibonacci_sequence);
