function withoutX(str){
    if(str.charAt(0)=='x' && str.charAt(str.length-1)=='x') {
      return str.substring(1,str.length-1);
    }
    else if(str.charAt(0)=='x' && str.charAt(str.length-1)!='x') {
      return str.substring(1,str.length);
    }
    else if(str.charAt(0)!='x' && str.charAt(str.length-1)=='x') {
      return str.substring(0,str.length-1);
    }
    else {
      return str;
    }
  }

let answer = withoutX('x');
console.log(answer);