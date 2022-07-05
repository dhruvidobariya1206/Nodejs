function missingChar(str, n){
  if(n>=0 && n<str.length) {
    return str.replace(str.charAt(n),'');
  }
  else {
    return false;
  }

}

let answer = missingChar(false,3);
  console.log(answer);