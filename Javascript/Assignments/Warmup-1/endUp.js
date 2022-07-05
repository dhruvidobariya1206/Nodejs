function endUp(str){
  if(str.length<3) {
    return str.toUpperCase();
  }
  else {
    let st1 = str.substring(str.length-3,str.length);
    return str.substring(0,str.length-3)+st1.toUpperCase();
  }
}

let answer = endUp('Hello');
  console.log(answer);