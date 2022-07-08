function midThree(nums){
    let len= Math.floor(nums.length/2);
    return nums.slice(len-1,len+2);
}

let answer = midThree([1, 2, 3, 4, 5]);
console.log(answer);