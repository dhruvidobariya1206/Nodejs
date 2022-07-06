function extraEnd(str){
  return str.substring(str.length-2,str.length).repeat(3);
}

let answer = extraEnd('Hello');
  console.log(answer);