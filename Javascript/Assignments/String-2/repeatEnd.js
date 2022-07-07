function repeatEnd(str, n){
    return str.substring(str.length-n,str.length).repeat(n);
  }

let answer = repeatEnd('Hello', 3);
console.log(answer);