function frontAgain(str){
  if(str.substring(0,2)==str.substring(str.length-2,str.length) && str.length>=2) {
    return true;
  }
  else {
    return false;
  }

}

let answer = frontAgain('edited');
  console.log(answer);