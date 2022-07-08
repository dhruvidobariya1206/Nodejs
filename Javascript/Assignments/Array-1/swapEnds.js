function swapEnds(nums){
    if(nums.length<=1) {
        return nums;
    }
    let start = [nums[0]];
    let end = [nums[nums.length-1]];
    let middle = nums.slice(1, nums.length-1);
    return end.concat(middle,start);
}

let answer = swapEnds([1, 2, 3, 4]);
console.log(answer);