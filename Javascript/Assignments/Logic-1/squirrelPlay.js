function squirrelPlay(temp, isSummer){
    if((temp>=60 && temp<=100 && isSummer==true) || (temp>=60 && temp<=90 && isSummer==false)) {
        return true;
    }
    else {
        return false;
    }
}

let answer = squirrelPlay(70, false);
console.log(answer);