function countCode(str){
    let i, cnt=0;
    for(i=0; i<str.length-3; i++) {
        if(str.substring(i,i+2)=='co' && str.charAt(i+3)=='e') {
            cnt++;
        }
    }
    return cnt;
}

let answer = countCode('codexxcode');
console.log(answer);