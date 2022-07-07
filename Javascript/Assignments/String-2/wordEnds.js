function wordEnds(str, word){
    let ans='';
    for(let i=0; i<str.length; i++) {
        if(str.substring(i,i+word.length)==word) {
            ans = ans + str.charAt(i-1) + str.charAt(i+word.length);
        }
    }
    return ans;
}

let answer = wordEnds('abcXY123XYijk', 'XY');
console.log(answer);