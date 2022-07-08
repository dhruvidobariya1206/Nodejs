function seriesUp(n){
    let ans = [];
    for(let i = 1; i<=n; i++) {
        for(let j = 1; j<=i; j++) {
            ans = ans.concat([j]);
        }
    }
    return ans;
}

let answer = seriesUp(3);
console.log(answer);