function loneSum(a, b, c){
  if(a==b && b==c) {
    return 0;
  }
  else {
    if(a==b) {
        return c;
    }
    else if(b==c) {
        return a;
    }
    else if(a==c) {
        return b;
    }
    else {
        return a+b+c;
    }
  }
}

let answer = loneSum(1, 2, 3);
console.log(answer);