function sameFirstLast(nums){
    if(nums[0]==nums[nums.length-1] && nums.length>0) {
        return true;
    }
    else {
        return false;
    }
}

let answer = firstLast6([1, 2, 6]);
console.log(answer);