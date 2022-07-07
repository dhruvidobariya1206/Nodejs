function sameStarChar(str){
    let i,cnt=0;
    for(i=0; i<str.length-1; i++) {
        if(str.charAt(i+1)=='*' && str.charAt(i)==str.charAt(i+2)) {
            cnt=1;
        }
        else if(str.charAt(i+1)=='*' && str.charAt(i)!=str.charAt(i+2)) {
            cnt=0;
        }
    }
    if(str.includes('*')==false) {
        return true;
    }
    else if(cnt==0 && str.length>=3){
        return false;
    }
    else {
        return true;
  }
}

let answer = sameStarChar('xy*yzz');
console.log(answer);