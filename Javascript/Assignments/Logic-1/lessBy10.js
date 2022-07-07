function lessBy10(a, b, c){
    if(Math.abs(a-b)>=10 || Math.abs(b-c)>=10 || Math.abs(a-c)>=10) {
        return true;
    }
    else {
        return false;
    }
}

let answer = lessBy10(1, 7, 11);
console.log(answer);