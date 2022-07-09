function array6(nums, i){
    if(i >= nums.length)
         return false;
           
     return nums[i] == 6 || array6(nums, i + 1);
 }