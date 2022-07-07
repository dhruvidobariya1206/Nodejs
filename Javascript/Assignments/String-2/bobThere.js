function bobThere(str){
    let i;
    for(i=0; i<str.length-2; i++) {
        if(str.charAt(i)=='b' && str.charAt(i+2)=='b') {
            return true;
        }
    }
    return false;
}

let answer = bobThere('abcbob');
console.log(answer);