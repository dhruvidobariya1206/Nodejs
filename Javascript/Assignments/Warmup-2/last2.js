function last2(str){
  let last = str.substring(str.length-2,str.length);
  
  let i,cnt=0;
  for(i=0; i<str.length-2; i++) {
    if(str.substring(i,i+2)==last) {
        cnt++;
    }
  }
  return cnt;
}

let answer = last2('xaxxaxaxx');
  console.log(answer);