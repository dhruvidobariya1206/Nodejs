function theEnd(str, front){
  
    if(front==true) {
        return str.charAt(0);
    }
    else {
        return str.CharAt(str.length-1);
    }

}

let answer = theEnd('Hello', true);
  console.log(answer);