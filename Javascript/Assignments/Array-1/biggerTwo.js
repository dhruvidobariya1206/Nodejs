function biggerTwo(a, b){
    if(a[0]+a[1]>=b[0]+b[1]) {
        return a;
    }
    else {
        return b;
    }
}

let answer = biggerTwo([1, 2], [3, 4]);
console.log(answer);