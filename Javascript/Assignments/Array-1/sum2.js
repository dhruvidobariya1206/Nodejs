function sum2(nums){
    if(nums.length>=2) {
        return nums[0]+nums[1];
    }
    else if(nums.length==1) {
        return nums[0];
    }
    else {
        return 0;
    }
}

let answer = sum2([1, 2, 3]);
console.log(answer);