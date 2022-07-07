function specialEleven(n){
    if(n%11<=1) {
        return true;
    }
    else {
        return false;
    }
}

let answer = specialEleven(22);
console.log(answer);