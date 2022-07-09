function array220(nums, i){
    if(i >= nums.length - 1)
          return false;
            
      return nums[i+1] == 10 * nums[i] || array220(nums, i + 1);
  }