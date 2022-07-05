function arrayFront9(nums){
    var count = 0
    for(var i=0; i<4; i++) {
      if((nums[i] == 9)) {
        count ++;
      }
    }
    if(count > 0) {
      return true
    } else {
      return false
    }
  }

  let answer = arrayFront9([1,2,9,3,4]);
  console.log(answer);