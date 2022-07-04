function posNeg(a, b, negative){
    if(negative==true) {
        if(a<0 && b<0) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        if((a<0 && b>0) || (a>0 && b<0)) {
            return true;
        }
        else {
            return false;
        }
        
    }

}

let answer = posNeg(-4,-5,true);
  console.log(answer);