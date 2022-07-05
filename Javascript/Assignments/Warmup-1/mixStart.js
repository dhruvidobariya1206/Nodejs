function mixStart(str){
  
    if(str.substring(1,3)=='ix') {
        return true;
    }
    else {
        return false;
    }

}

let answer = mixStart('mix snacks');
  console.log(answer);