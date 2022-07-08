function fix34(nums){

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 3) {
      for (let j = i; j < nums.length; j++) {
        if (nums[j] == 4) {
          let tmp = nums[i+1];
          nums[i+1] = 4;
          nums[j] = tmp;
        }
      }
    }
  }
  return nums;
}


let answer = fix34([1, 4, 2, 1, 4, 1, 4]);
console.log(answer);

