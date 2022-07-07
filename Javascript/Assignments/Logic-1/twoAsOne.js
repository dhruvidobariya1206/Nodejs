function twoAsOne(a, b, c){
    if(a+b==c || b+c==a || a+c==b) {
        return true;
    }
    else {
        return false;
    }
}

let answer = twoAsOne(1, 2, 3);
console.log(answer);