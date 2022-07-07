function maxMod5(a, b){
    if(a==b) {
        return 0;
    }
    else if(a%5==b%5) {
        return Math.min(a,b);
    }
    else {
        return Math.max(a,b);
    }
}

let answer = maxMod5(2, 3);
console.log(answer);