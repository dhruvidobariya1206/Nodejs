function shareDigit(a, b){
    let a1=Math.floor(a/10),a2=a%10;
    let b1=Math.floor(b/10),b2=b%10;
    if(a2==b2 || a2 == b1 || a1==b2 || a1==b1) {
        return true;
    }
    else {
        return false;
    }
}

let answer = shareDigit(12, 23);
console.log(answer);