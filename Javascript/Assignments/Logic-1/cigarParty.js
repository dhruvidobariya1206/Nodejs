function cigarParty(cigars, isWeekend){
    if((isWeekend==true && cigars>=40) ||
            (isWeekend==false && cigars>=40 && cigars<=60)) {
                return true;
    }
    else {
        return false;
    }
}

let answer = cigarParty(70, true);
console.log(answer);