function repeatSeparator(word, sep, count){
    let i, ans='';
    for(i=0; i<count; i++) {
        ans = ans + word + sep;
    }
    return ans.substring(0,ans.length-sep.length);
}

let answer = repeatSeparator('Word', 'X', 3);
console.log(answer);