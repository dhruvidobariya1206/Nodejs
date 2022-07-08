function rotateLeft3(nums){
    let strt=[nums[0]];
    ans = nums.slice(1,nums.length);
    return ans.concat(strt);
}

let answer = rotateLeft3([5, 11, 9]);
console.log(answer);