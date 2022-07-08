function maxMirror(nums){
  let len = nums.length;
  let count= 0;
  let max = 0;
  for (let i = 0; i < len; i++){
    count=0;
    for (let j = len-1; i + count < len && j > -1; j--){
      if(nums[i+count] == nums[j]){
        count++;
      }
      else{
        if (count > 0){
          max = Math.max(count,max);
          count = 0;
        }
      }
    }
    max = Math.max(count,max);
  }

  return max;

}


let answer = maxMirror([1, 4, 2, 1, 4, 1, 4]);
console.log(answer);