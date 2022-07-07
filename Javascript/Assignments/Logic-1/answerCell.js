function answerCell(isMorning, isMom, isAsleep){
    if(isAsleep==true) {
        return false;
    }
    else {
        if(isMorning==true && isMom==true) {
            return true;
        }
        else if(isMorning==true && isMom!=true){
            return false;
        }
      else {
            return true;
      }
    }
}

let answer = teenSum(10, 13);
console.log(answer);