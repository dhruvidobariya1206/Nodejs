function makeChocolate(small, big, goal){
  
    let left = goal % 5;
    
    if (small + (big*5) < goal) {
        console.log(1);
        return -1;
    }
    else if (left <= small && goal - big*5 > 4) {
        console.log(2);
        return left + 5;
    }
    else if (left <= small) {
        console.log(3);
        return left;
    }
    else {
        console.log(4);
        return -1;
    }
   
}

let answer = makeChocolate(60, 100, 550);
console.log(answer);