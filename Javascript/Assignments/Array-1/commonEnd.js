function commonEnd(a, b){
    if(a[a.length-1]==b[b.length-1] || a[0]==b[0]) {
        return true;
    }
    else {
        return false;
    }
}

let answer = commonEnd([1, 2, 3], [7, 3, 2]);
console.log(answer);