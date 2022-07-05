function lastDigit(a, b){
  if(a%10==b%10) {
    return true;
  }
  else {
    return false;
  }
}

let answer = lastDigit(10,20);
  console.log(answer);