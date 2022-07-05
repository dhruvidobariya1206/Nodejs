function stringMatch(a, b){
  let i,cnt=0;

  for(i=0; i<=a.length-2 && i<=b.length-2; i++) {
    if(a.substring(i,i+2)==b.substring(i,i+2)) {
        cnt++;
    }
  }
  return cnt;
}

let answer = stringMatch('xxcaazz', 'xxbaaz');
  console.log(answer);