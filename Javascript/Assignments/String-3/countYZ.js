function countYZ(str){
    let cnt=0;
    for(let i=0; i<str.length; i++) {
        if(str.substring(i,i+2)=='y ' || str.substring(i,i+2)=='z ' || 
            (i==str.length-1 && (str.charAt(i)=='y' || str.charAt(i)=='z'))) {
            cnt++;
        }
    }
    return cnt;
}

let answer = countYZ('fez day');
console.log(answer);