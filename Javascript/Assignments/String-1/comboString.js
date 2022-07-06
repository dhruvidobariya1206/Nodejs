function comboString(a, b){
  if(a.length>=b.length) {
    return b+a+b;
  }
  else {
    return a+b+a;
  }
}

let answer = comboString('Hello', 'hi');
console.log(answer);