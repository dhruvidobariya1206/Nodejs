function loneTeen(a, b){
  
    if((a>=13 && a<=19) && (b>=13 && b<=19)) {
        return false;
    }
    else {
        if((a>=13 && a<=19)) {
            return true;
        }
        else if((b>=13 && b<=19)) {
            return true;
        }
        return false;
    }

}

let answer = loneTeen(35,15);
  console.log(answer);