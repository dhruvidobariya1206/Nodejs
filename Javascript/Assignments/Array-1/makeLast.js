function makeLast(nums){
    let len=nums.length;
    let ans = [];
    for(let i=0; i<(len*2)-1; i++) {
        let z=[0];
        ans = ans.concat(z);
    }
    return ans.concat(nums[len-1]);
}

let answer = makeLast([4, 5, 6]);
console.log(answer);