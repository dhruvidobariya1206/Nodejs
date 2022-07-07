function greenTicket(a, b, c){
    if(a==b && a==c) {
        return 20;
    }
    else if(a!=b && a!=c && b!=c) {
        return 0;
    }
    else {
        return 10;
    }
}

let answer = greenTicket(2, 2, 2);
console.log(answer);