function plusOut(str, word){
    let ans='';
    for(let i=0; i<str.length; i++) {
        if(str.substring(i,i+word.length)==word) {
            ans = ans + word;
            i += word.length-1
        }
        else {
            ans = ans + '+';
        }
    }
    return ans;
}

let answer = plusOut('12xy34', 'xy');
console.log(answer);