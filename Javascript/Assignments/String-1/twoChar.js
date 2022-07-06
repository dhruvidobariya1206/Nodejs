function twoChar(str, index){
    if(index>=0 && index<=str.length-2) {
    return str.substring(index,index+2);
  }
  else {
    return str.substring(0,index);
  }

}


let answer = seeColor('blueTimes');
console.log(answer);