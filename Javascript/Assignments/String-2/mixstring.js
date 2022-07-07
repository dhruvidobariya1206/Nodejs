function mixString(a, b){
  let i,ans='';
  for(i=0; i<a.length || i<b.length; i++) {
    if(i<a.length) {
        ans = ans + a.charAt(i);
    }
    if(i<b.length) {
        ans = ans + b.charAt(i);
    }
  }
  return ans;
}

let answer = doubleChar('The');
console.log(answer);