function noTeenSum(a,b,c) {
      return fixTeen(a) + fixTeen(b) + fixTeen(c);
}

function fixTeen(n) {
    if ( (n >=13 && n < 15) || (n > 16 && n <= 19) ) {
        return 0;
    }
    else {
        return n;
    }
}
   
let answer = noTeenSum(2, 13, 1);
console.log(answer);