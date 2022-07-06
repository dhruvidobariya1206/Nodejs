function right2(str){
  return str.substring(str.length-2,str.length) + str.substring(0,str.length-2);
}

let answer = right2(hello);
console.log(answer);