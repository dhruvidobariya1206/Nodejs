function starOut(str){
    for(let i=0; i<str.length; i++) {
        if(str.charAt(i)=='*' && str.charAt(i+1)!='*') {
            str = str.replace(str.substring(i-1,i+2),'');
        }
        else if(str.charAt(i)=='*') {
            let j;
            for(j=i; str.char(j+1)!='*'; j++) {

            }
            str = str.replace(str.substring(i-1,i+j),'');
        }
      }
      return str;
}

let answer = starOut('ab*cd');
console.log(answer);
