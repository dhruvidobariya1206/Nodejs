function caughtSpeeding(speed, isBirthday){
    if((isBirthday==false && speed<=60) || (isBirthday==true && speed<=65)) {
        return 0;
    }
    else if((isBirthday==false && speed>60 && speed<=80) || (isBirthday==true && speed>65 && speed<=85)) {
        return 1;
    }
    else {
        return 2;
    }
}

let answer = caughtSpeeding(60, false);
console.log(answer);