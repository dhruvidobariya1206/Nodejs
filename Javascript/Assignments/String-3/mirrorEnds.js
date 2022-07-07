function mirrorEnds(str){
    let i;
    for(i=0; i<=str.length/2; i++) {
        if(str.charAt(i)!=str.charAt(str.length-i-1)) {
            break;
        }
    }
    return str.substring(0,i);
}

let answer = mirrorEnds('abXYZba');
console.log(answer);