function without2(str){
  if(str.length==2) {
    return '';
  }
  else if (str.substring(0,2)==str.substring(str.length-2,str.length) && str.length>=2) {
    return str.substring(2,str.length);
  }
  else {
    return str;
  }
}


let answer = without2('HelloHe');
console.log(answer);