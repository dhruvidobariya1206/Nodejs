function make2(a, b){
    if(a.length>=2) {
        return a.slice(0,2);
    }
    else if(a.length==1) {
        ans = a;
        return a.concat(b[0]);
    }
    else {
        return b.slice(0,2);
    }
}

let answer = make2([4, 5], [1, 2, 3]);
console.log(answer);