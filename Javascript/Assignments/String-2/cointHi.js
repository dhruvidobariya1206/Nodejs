function countHi(str){
    let i, cnt=0;
    for(i=0; i<str.length-1; i++) {
        if(str.substring(i,i+2)=='hi') {
            cnt++;
        }
    }
    return cnt;
}

let answer = doubleChar('The');
console.log(answer);