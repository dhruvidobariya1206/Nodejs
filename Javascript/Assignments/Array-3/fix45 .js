function fix45(nums){
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 4) {
          for (let j = i; j < nums.length; j++) {
            if (nums[j] == 5) {
              let tmp = nums[i+1];
              nums[i+1] = 5;
              nums[j] = tmp;
            }
          }
        }
      }
      return nums;
}

let answer = fix45([1, 4, 2, 1, 4, 1, 4]);
console.log(answer);