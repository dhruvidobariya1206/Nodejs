function maxEnd3(nums){
    if(nums[0]>=nums[nums.length-1]) {
        return nums.fill(nums[0]);
    }
    else {
        return nums.fill(nums[nums.length-1]);
    }
}

let answer = maxEnd3([11, 5, 9]);
console.log(answer);