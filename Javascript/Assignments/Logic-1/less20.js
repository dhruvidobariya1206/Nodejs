function less20(n){
    if(n%20==18 || n%20==19) {
       return true;
    }
    else {
      return false;
    }
  }

  let answer = less20(18);
console.log(answer);