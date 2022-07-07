function redTicket(a, b, c){
    if(a==2 && b==2 && c==2) {
        return 10;
    }
    else if(a==b && a==c) {
        return 5;
    }
    else if(a!=b && a!=c) {
        return 1;
    }
    else {
        return 0;
    }
}

let answer = redTicket(2, 2, 2);
console.log(answer);