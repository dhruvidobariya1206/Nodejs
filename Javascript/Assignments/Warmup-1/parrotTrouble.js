function parrotTrouble(talking, hour){
  if ((hour<7 || hour>20) && talking==true) {
    return true;
  }
  else {
    return false;
  }
}

let answer = parrotTrouble(true, 6);
  console.log(answer);