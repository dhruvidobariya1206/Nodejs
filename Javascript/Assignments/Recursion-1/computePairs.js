function countPairs(str){
    let cnt=0;
    for(let i=0; i<str.length; i++) {
        if(str.charAt(i)==str.charAt(i+2)) {
            cnt++;
        }
    }
    return cnt;
}

