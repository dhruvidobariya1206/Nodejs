function minCat(a, b){
    let a2, b2;
  if(a.length<b.length) {
    b2 = b.substring(b.length-a.length,b.length);
    a2 = a;
    return a2 + b2;
  }
  else if(a.length>b.length) {
    a2 = a.substring(a.length-b.length,a.length);
    b2 = b;
    return a2 + b2;
  }
  else {
    return a + b;
  }
//   console.log(a2,b2);
}

let answer = minCat('java', 'Hello');
  console.log(answer);