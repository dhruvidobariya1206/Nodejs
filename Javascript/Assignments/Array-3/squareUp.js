function squareUp(n){
    let result = [];
    let x = n-1, pass = 1, index = 0;
    if(n == 0) { return result; }
    for(let i = n-1; i < result.length; i+=n) {
        index = i;
        for(let k = 1; k <= pass; k++) {
        if(k == 0) { break; }
        result[index] = k;
        index--;
        }
        pass++;
    }
    return result;
}