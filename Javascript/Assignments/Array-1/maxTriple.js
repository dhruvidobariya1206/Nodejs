function maxTriple(nums){
    let hlen = Math.floor(nums.length/2);
    let last = nums.length-1;
    //console.log(hlen, last);
    if(nums[0]>=nums[hlen] && nums[0]>nums[last]) {
        return nums[0];
    }
    else if(nums[hlen]>nums[0] && nums[hlen]>nums[last]) {
        return nums[hlen];
    }
    else if(nums[last]>nums[0] && nums[last]>nums[hlen]) {
        return nums[last];
    }
    else {
        return 0;
    }

}

let answer = maxTriple([1, 2, 3]);
console.log(answer); 