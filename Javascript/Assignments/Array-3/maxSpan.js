function maxSpan(nums){
    let span = 0;
    let tmp = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
        if (nums[i] == nums[j]) {
            tmp = j-i+1;
            span = Math.max(tmp,span);
        }
        }
    }
    return span;
}

let answer = maxSpan([1, 4, 2, 1, 4, 1, 4]);
console.log(answer);