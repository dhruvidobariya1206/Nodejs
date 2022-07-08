function more20(n){
    if(n%20==2 || n%20==1) {
        return true;
    }
    else {
        return false;
    }
}

let answer = more20(13);
console.log(answer);