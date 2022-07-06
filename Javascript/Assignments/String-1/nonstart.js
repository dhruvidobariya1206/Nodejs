function nonStart(a, b){
    return a.substring(1,a.length) + b.substring(1,b.length);
  }

  let answer = nonStart('Hello', 'There');
console.log(answer);