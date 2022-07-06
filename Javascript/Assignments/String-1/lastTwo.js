function lastTwo(str){
  let end1 = str.charAt(str.length-1);
  let end2 = str.charAt(str.length-2);
  return str.substring(0,str.length-2) + end1 + end2;
}

let answer = lastTwo('coding');
  console.log(answer);