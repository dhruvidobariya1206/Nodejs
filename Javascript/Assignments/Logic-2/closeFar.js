function closeFar(a, b, c){
  if((Math.abs(a-b)<=1 && Math.abs(a-c)>=2 && Math.abs(b-c)>=2) || 
        (Math.abs(a-c)<=1 && Math.abs(a-b)>=2 && Math.abs(b-c)>=2)) {
    return true;
  }
  else {
    return false;
  }
}

let answer = closeFar(1, 2, 3) ;
console.log(answer);