function deFront(str){
    if(str.charAt(0)=='a' && str.charAt(1)!='b') {
     return str.charAt(0)+str.substring(2,str.length);
   }
   else if(str.charAt(1)=='b' && str.charAt(0)!='a') {
     return str.substring(1,str.length);
   }
   else if(str.charAt(0)=='a' && str.charAt(1)=='b'){
     return str;
   }
   else {
     return str.substring(2,str.length);
   }
 }

let answer = deFront('away');
console.log(answer);