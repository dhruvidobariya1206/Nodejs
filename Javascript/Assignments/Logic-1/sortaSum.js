function sortaSum(a, b){
    if(a+b>=10 && a+b<=19) {
        return 20;
    }
    else {
        return a+b;
    }
}

let answer = sortaSum(9, 4);
console.log(answer);