function icyHot(temp1, temp2){
  
    if ((temp1<0 && temp2>100) || (temp1>100 && temp2<0)) {
        return true;
    }
    else {
        return false;
    }

}

let answer = icyHot(35,125);
  console.log(answer);