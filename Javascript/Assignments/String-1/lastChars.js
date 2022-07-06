function lastChars(a, b){
  let st1='',st2='';
  if(a.length==0) {
    st1='@';
  }
  else {
    st1=a.charAt(0);
  }

  if(b.length==0) {
    st2='@';
  }
  else {
    st2=b.charAt(b.length-1);
  }
  return st1+st2;
}

let answer = right2(hello);
console.log(answer);