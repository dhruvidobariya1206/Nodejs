function or35(n){
  if(n>0 && (n%3==0 || n%5==0)) {
    return true;
  }
  else {
    return false;
  }

}

let answer = or35(35);
  console.log(answer);