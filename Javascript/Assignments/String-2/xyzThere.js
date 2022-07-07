function xyzThere(str){
    let cnt=0;
    for(let i=0; i<=str.length-3; i++) {
        if(str.substring(i,i+3)=='xyz' && str.charAt(i-1)!='.') {
            cnt++;
        }
    }
    if(cnt>0) {
        return true;
    }
    else {
        return false;
    }
}

let answer = xyzThere('abc.xyz');
console.log(answer);