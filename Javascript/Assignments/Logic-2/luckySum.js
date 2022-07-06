function luckySum(a, b, c){
  if(a==13) {
    return 0;
  }
  else if(b==13) {
    return a;
  }
  else if(c==13) {
    return a+b;
  }
  else {
    return a+b+c;
  }
}

let answer = luckySum(1, 13, 3);
console.log(answer);