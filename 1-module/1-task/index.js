function factorial(n) {
  if (n < 0) {
      return undefined; 
  }

  let result = 1;
  let i = n;

  while (i > 1) {   // for(let i = n;i > 1; i--)
      result *= i;
      i--;
  }

  return result;


}
