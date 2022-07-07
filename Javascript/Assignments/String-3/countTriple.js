function countTriple(str){
    let cnt;
    for(let i=0; i<str.length; i++) {
        if(str.charAt(i+1)==str.charAt(i) && str.charAt(i+2)==str.charAt(i)) {
            cnt++;
        }
    }
    return cnt;
}

let answer = countTriple('xxxabyyyycd');
console.log(answer);