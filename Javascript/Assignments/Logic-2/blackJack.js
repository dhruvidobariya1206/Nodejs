function blackjack(a, b){
  if(Math.abs(a-21)>Math.abs(b-21) && a<=21 && b<=21) {
    if(b<=21) {
        return b;
    }
    else {
        return a;
    }
  }
  else if(Math.abs(a-21)<Math.abs(b-21) && a<=21 && b<=21) {
    if(a<=21) {
        return a;
    }
    else {
        return b;
    }
  }
  else {
    if(a<=21) {
        return a;
    }
    else if(b<=21){
        return b;
    }
    else {
        return 0;
    }
  }
}

let answer = blackjack(22,50);
console.log(answer);