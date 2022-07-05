function has271(nums){
    let str = nums.toString();
      let i;
     if(str.length>=3) {
          for(i=0; i<=str.length; i++) {
              if(str.substring(i,i+2)=='271') {
                  return true;
              }
          }
          return false;
      }
      else {
         return false;
      }
  }

let answer = has271([1,2,7,1]);
  console.log(answer);