function front11(a, b){
    let a1 = [a[0]], b1=[b[0]];
    let ans = [{}];
    if(a.length>0 && b.length>0) {
        return a1.concat(b1);
    }
    else if(a.length==0) {
        return b1;
    }
    else if(b.length==0) {
        return a1;
    }
    else {
        return ans;
  }
}

let answer = front11([], []);
console.log(answer);