function stringTimes(str, n){
  let i,st1 = '';
    for(i=1; i<=n; i++) {
        st1 = st1.concat(str);
    }
    return st1;
}

let answer = stringTimes('false',5);
  console.log(answer);