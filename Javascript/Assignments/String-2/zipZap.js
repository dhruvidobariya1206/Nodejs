function zipZap(str){
  var a=""
  for(var i=0;i<str.length;i++){
    a=a+str.substring(i,i+1)
    if(i>0&&i<str.length-1&&str.charAt(i-1)=='z'&&str.charAt(i+1)=='p')
      a=a.substring(0,a.length-1)
  }
  return a

  }

let answer = zipZap('azbcpzpp');
console.log(answer);