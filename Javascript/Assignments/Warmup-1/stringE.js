function stringE(str){
    let cnt=0,i;
    for(i=0;i<=str.length;i++) {
      if(str.charAt(i)=='e') {
        cnt++;
      }
    }
    if(cnt==1 || cnt==3) {
      return true;
    }
    else {
      return false;
    }
  }
let answer = stringE('Hello');
  console.log(answer);