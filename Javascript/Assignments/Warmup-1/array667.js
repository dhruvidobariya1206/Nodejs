function array667(nums){
    let i, cnt=0;
    for(i=0; i<=nums.length; i++) {
        if(nums[i]==6 && (nums[i+1]==6 || nums[i+1]==7)) {
            cnt++;
        }
    }
    return cnt;
}

let answer = array667([6,7,2,6]);
  console.log(answer);