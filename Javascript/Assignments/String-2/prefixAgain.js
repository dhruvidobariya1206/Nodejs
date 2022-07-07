function prefixAgain(str, n){
    for(let i=n; i<str.length; i++) {
        if(str.substring(i,i+n)==str.substring(0,n)) {
            return true;
        }
    }
    return false;
}

let answer = sameStarChar('xy*yzz');
console.log(answer);