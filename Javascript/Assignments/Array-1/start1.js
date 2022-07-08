function start1(a, b){
    if(a[0]==1 && b[0]==1) {
        return 2;
    }
    else if(a[0]==1 || b[0]==1) {
        return 1;
    }
    else {
        return 0;
    }
}

let answer = start1([1, 2, 3], [1, 3]);
console.log(answer);