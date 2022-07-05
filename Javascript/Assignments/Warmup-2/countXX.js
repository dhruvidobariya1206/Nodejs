function countXX(str){
    let i,cnt=0;
    for(i=0; i<str.length-1; i++) {
        console.log(str.substring(i,i+2));
        if(str.substring(i,i+2)=='xx') {
            cnt++;
        }
    }
    return cnt;
}

let answer = countXX('xxxx');
  console.log(answer);