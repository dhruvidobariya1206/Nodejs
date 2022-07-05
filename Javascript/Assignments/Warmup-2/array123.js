function array123(nums){
    let str = nums.toString();
    let i;
    if(str.length>=3) {
        for(i=0; i<=str.length; i++) {
            if(str.substring(i,i+3)=='123') {
                return true;
            }
        }
        return false;
    }
    else {
        return false;
    }

}

let answer = array123('12cxo13ex123');
  console.log(answer);