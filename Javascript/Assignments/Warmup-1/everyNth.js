function everyNth(str, n){
  let st1='',i;
  for(i=0; i<str.length;i=i+n) {
    st1 = st1.concat(str.charAt(i));
  }
  return st1;
}

let answer = everyNth('Hello',2);
  console.log(answer);