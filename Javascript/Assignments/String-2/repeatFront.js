function repeatFront(str, n){
    let i, st1='';
    for(i=n;i>0;i--) {
      st1 = st1.concat(str.substring(0,i));
    }
    return st1;
}

let answer = repeatFront('Chocolate', 4);
console.log(answer);