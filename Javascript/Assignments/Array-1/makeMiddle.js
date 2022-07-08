function makeMiddle(nums){
    let first = [nums[(nums.length/2)-1]];
    let end = [nums[nums.length/2]];
    return first.concat(end);
}

let answer = makeMiddle([7, 1, 2, 3, 4, 9])
console.log(answer);