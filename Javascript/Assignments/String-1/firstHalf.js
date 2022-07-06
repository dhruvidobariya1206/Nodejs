function firstHalf(str){
  if(str.length%2==0) {
    return str.substring(0,str.length/2);
  }
  else {
    return '';
  }
}


let answer = firstHalf('HelloThere');
console.log(answer);