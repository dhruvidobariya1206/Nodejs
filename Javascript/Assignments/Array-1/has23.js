function has23(nums){
    for(let i=0; i<nums.length; i++) {
        if(nums[i]==2 || nums[i]==3) {
            return true;
        }
    }
    return false;
}

let answer = has23([2, 5])
console.log(answer);