function notString(str){
  if(str.slice(0,3)=='not') {
    return str;
  }
  else {
    let not='not ';
    return not.concat(str);
  }

}

let answer = notString(false);
  console.log(answer);