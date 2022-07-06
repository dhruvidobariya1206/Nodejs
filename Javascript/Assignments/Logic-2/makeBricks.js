function makeBricks(small, big, goal){
  
    if((small+(big*5))==goal || small==goal || big*5==goal) {
        return true;
    }
    else {
        return false;
    }

}

let answer = makeBricks(3, 1, 8);
console.log(answer);