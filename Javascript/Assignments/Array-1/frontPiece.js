function frontPiece(nums){
    if(nums.length>=2) {
        return nums.slice(0,2);
    }
    else return nums;
}

let answer = frontPiece([1, 2, 3]);
console.log(answer);