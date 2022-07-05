function stringX(str){
    let start='',end='';
    if(str.charAt(0)=='x') {
        start = str.charAt(0);
    }
    if(str.charAt(str.length-1)=='x') {
        end = str.charAt(str.length-1);
    }
    for(i=1; i<=str.length+1; i++) {
        str = str.replace("x", "");
    }
        return start + str + end;
    
}

let answer = stringX('xxHxix');
  console.log(answer);