function doubleX(str){

    if(str.length>=2) {
        let i,cnt=0;
        for(i=0; i<str.length-1; i++) {
            if(str.charAt(i)=='x') { 
                if(str.charAt(i+1)=='x') {
                    return true;
                }
                else {
                    return false;
                }
                
            }
            
        }
        return false;
    }
    else {
        return false;
    }

}

let answer = doubleX('xaxxx');
  console.log(answer);