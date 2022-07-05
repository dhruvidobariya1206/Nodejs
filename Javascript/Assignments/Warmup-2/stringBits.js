function stringBits(str){
    let st1='',i;
    for(i=0; i<str.length;i=i+2) {
      st1 = st1.concat(str.charAt(i));
    }
    return st1;
}

let answer = stringBits('Heeololeo');
  console.log(answer);