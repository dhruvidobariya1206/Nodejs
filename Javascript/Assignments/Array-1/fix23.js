function fix23(nums){
    for(let i=0; i<=nums.length; i++) {
        if(nums[i]==2 && nums[i+1]==3) {
            // console.log(i,i+1);
            nums.splice(i+1,1,0);
            // console.log(nums[i+1]);
        }
    }
    return nums;
}

let answer = fix23([1, 2, 3]);
console.log(answer);