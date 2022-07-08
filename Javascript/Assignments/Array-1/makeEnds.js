function makeEnds(nums){
    let start = [nums[0]];
    let end = [nums[nums.length-1]];
    return start.concat(end);
}

let answer = firstLast6([1, 2, 6]);
console.log(answer);