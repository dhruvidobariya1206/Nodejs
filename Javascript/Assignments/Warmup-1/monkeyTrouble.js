function monkeyTrouble(aSmile, bSmile){
    if((aSmile==true && bSmile==true) || (aSmile==false && bSmile==false)) {
        return true;
    }
    else {
        return false;
    }
  }

  let answer = monkeyTrouble(false, false);
  console.log(answer);