function noTriples(nums){
  if(nums.length>=3) {
    let i,cnt=0;
    for(i=0; i<=nums.length-3; i++) {
        if(nums[i]==nums[i+1] && nums[i]==nums[i+2]) {
            cnt++;
        }
    }
    if(cnt==0) {
        return true;
    }
    else {
        return false;
    }
  }
  else {
    return true;
  }

}

let answer = noTriples([1,1,2,2,1]);
  console.log(answer);