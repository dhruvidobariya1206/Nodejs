function withoutX2(str){
  let st1;
  if(str.charAt(1)=='x' && str.charAt(0)=='x') {
    st1=str.replace(str.substring(0,2),'');
  }
  else if(str.charAt(1)=='x') {
    st1=str.replace(str.charAt(1),'');
  }
  else if(str.charAt(0)=='x') {
    st1=str.replace(str.charAt(0),'');
  }
  else {
    st1=str;
  }
  return st1;
}

let answer = withoutX2('xxHi');
console.log(answer);