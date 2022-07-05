function stringX(str){
    // let i;
    // for(i=0; i<=str.length; i++) {
    //     console.log(i);
    //     if(str.charAt(i)=='x') {
    //         str.replace(str.charAt(i),'');
    //         console.log(str);
    //     }
    // }
    // return str;
    if (str.length<=2) {
        return str;
    }
    let i;
    
        let start= str.charAt(0) ;
    let end= str.charAt(str.length-1);
    for(i=1; i<=str.length; i++) {
        str = str.replace("x", "");
    }
    if(str.charAt(0)=='x' && str.charAt(str.length-1)=='x') {
        return start + str + end;
    }
    else if(str.charAt(0)!='x' && str.charAt(str.length-1)=='x') {
        return str+end;
    }
    else {
        return start+str;
    }

    
}

let answer = stringX('cxoxdxex');
  console.log(answer);