function canBalance(nums){
    let lSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        lSum += nums[i];
        let rSum = 0;
        for (let j = nums.length-1; j > i; j--) {
        rSum += nums[j];
        }
        if (rSum == lSum)
        return true;
    }
    return false;
}

let answer = canBalance([1, 4, 2, 1, 4, 1, 4]);
console.log(answer);