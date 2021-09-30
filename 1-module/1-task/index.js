function factorial(n) {
  let factorial = 1;
  if(n > 1){
    for(let i = 0; i < n; i++){
      factorial = factorial * (n - i);
    }
  }
  return factorial;
};
