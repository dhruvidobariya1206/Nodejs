function diff21(n){
    let ans = Math.abs(n-21);

    if (n<21) {
        return ans;
    }
    else {
        return ans*2;
    }
}

let answer = diff21(25);
  console.log(answer);