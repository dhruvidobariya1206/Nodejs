function makeBricks(small, big, goal){
  
    if(goal%5<=small && goal-(big*5)<=small) {
        return true;
    }
    else {
        return false;
    }

}

let answer = makeBricks(3, 1, 8);
console.log(answer);