function nearTen(num){
    if(num%10<=2 || num%10>=8) {
        return true;
    }
    else {
        return false;
    }
  }

  let answer = nearTen(12);
console.log(answer);