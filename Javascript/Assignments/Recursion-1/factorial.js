function factorial(n){
    let ans = 1;
    for(let i=n; i>0; i--) {
        ans = ans*i;
    }
    return ans;
}