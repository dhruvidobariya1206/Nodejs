function evenlySpaced(a, b, c){
    let diff1 = 0;
    let diff2 = 0;
    let diff3 = 0;
     
    if(a==b && a ==c) {
        return true;
    }
    
    if(a == b || b == c || a == c) {
        return false;
    }
    
    diff1 = Math.abs(a - b);
    diff2 = Math.abs(a - c);
    diff3 = Math.abs(b - c);
    if(diff1 == diff2 || diff1 == diff3 || diff2 == diff3) {
        return true;
    }
   
    return false;
}

let answer = evenlySpaced(2, 4, 6);
console.log(answer);