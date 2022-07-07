function doubleChar(str){
    let i, ans='';
    for(i=0; i<str.length; i++) {
        ans = ans + str.charAt(i).repeat(2);
    }
    return ans;
}

let answer = doubleChar('The');
console.log(answer);