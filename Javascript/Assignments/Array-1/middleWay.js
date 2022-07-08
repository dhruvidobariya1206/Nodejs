function middleWay(a, b){
    let a1 = [a[1]], b1=[b[1]];
    return a1.concat(b1);
}

let answer = middleWay([1, 2, 3], [4, 5, 6]);
console.log(answer);