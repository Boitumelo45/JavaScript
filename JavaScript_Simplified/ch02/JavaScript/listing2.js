/*
  X_{n} = X_{n-1} + x_{n-2}
  fibonacci rule
*/

var fib = (n) =>{
  let n1 = 0, n2 = 1;

  //dictionary/hash-table/map
  let fibonacci_sequence = {
    0:0,
    1:1
  };

  if(n == 0){
    return n1;
  }if(n == 1){
    return 1;
  }else{
    for(let i = 2; i <= n; i++){
      fibonacci_sequence[i] = fibonacci_sequence[i - 1] + fibonacci_sequence[i -2];
    }
    return fibonacci_sequence[n];
  }
  //console.log(fibonacci_sequence); //store in a map
  //console.log("fibonacci of ", n, " = ", fibonacci_sequence[n]);
}

console.log(fib(8));
