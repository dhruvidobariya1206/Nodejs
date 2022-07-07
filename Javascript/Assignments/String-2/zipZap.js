function zipZap(str){
    let i, ans;
      for(i=0; i<str.length; i++) {
          if(str.charAt(i)=='z' && str.charAt(i+2)=='p') {
            // console.log(str.charAt(i),str.charAt(i+2),i);
              str = str.replace(str.charAt(i+1),'');
            //   console.log(str.charAt(i+1));
          }
      }
      return str;
  }

let answer = zipZap('azbcpzpp');
console.log(answer);