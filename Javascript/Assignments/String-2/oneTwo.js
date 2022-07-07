function oneTwo(str){
    let i, ans='';
    for(i=0; i<=(str.length-3); i=i+3) {
        ans = ans + str.substring(i+1,i+3) + str.charAt(i);
    }
    return ans;
}

let answer = oneTwo('tcagdo');
console.log(answer);