function nearHundred(n){
  if(Math.abs(n-100)<=10 || Math.abs(n-200)<=10) {
    return true;
  }
  else {
    return false;
  }

}

let answer = nearHundred(95);
  console.log(answer);