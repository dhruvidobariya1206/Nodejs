function conCat(a, b){
  if(a.charAt(a.length-1)==b.harAt(0)) {
    return a + b.substring(1,b.length);
  }
  else {
    return a + b;
  }

}

let answer = conCat('abc', 'cat');
  console.log(answer);