function stringSplosion(str){
  let i, st1='';
  for(i=1;i<=str.length;i++) {
    st1 = st1.concat(str.substring(0,i));
  }
  return st1;
}

let answer = stringSplosion('code');
  console.log(answer);