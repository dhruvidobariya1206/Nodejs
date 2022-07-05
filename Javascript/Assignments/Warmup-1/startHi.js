function startHi(str){
  if(str.substring(0,2)=='hi') {
    return true;
  }
  else {
    return false;
  }

}

let answer = startHi('hi there');
  console.log(answer);