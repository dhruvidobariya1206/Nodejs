function backAround(str){
    // let ans = str.charAt(str.length-1)+str+str.charAt(str.length-1);
    return str.charAt(str.length-1)+str+str.charAt(str.length-1);
}

let answer = backAround('false');
  console.log(answer);