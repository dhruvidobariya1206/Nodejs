function countAbc(str){
    let cnt=0;
    for(let i=0; i<str.length; i++) {
        if(str.substring(i,i+3)=='abc' || str.substring(i,i+3)=='aba') {
            cnt++;
        }
    }
    return cnt;
}