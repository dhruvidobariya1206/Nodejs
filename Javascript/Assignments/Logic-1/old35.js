function old35(n){
    if((n%3==0 && n%5!=0) || (n%3!=0 && n%5==0)) {
        return true;
    }
    else {
        return false;
    }
}

let answer = old35(15);
console.log(answer);