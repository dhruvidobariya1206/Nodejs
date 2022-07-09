function sumDigits1(n){
    if(n==0)
      return 0;
    return n%10 + sumDigits1(Math.floor(n/10));
  }