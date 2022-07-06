function endsLy(str){
  if(str.length>=2 && str.substring(str.length-2,str.length)=='ly') {
    return true;
  }
  else {
    return false;
  }
}

let answer = endsLy('oddly');
  console.log(answer);