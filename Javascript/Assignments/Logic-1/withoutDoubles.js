function withoutDoubles(die1, die2, noDoubles){
    if(die1 == die2 && noDoubles==true) {
        if(die1==6 || die2==6) {
            return die1 + die2 -5;
        }
        else {
            return die1 + die2 +1;
        }
        
    }
    else {
        return die1+die2;
    }
}

let answer = withoutDoubles(3, 3, true);
console.log(answer);