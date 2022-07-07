function alarmClock(day, vacation){
    if(vacation==true && (day==0 || day==6)) {
        return 'off';
    }
    else if((vacation==true && day>0 && day<6) || (vacation==false && (day==0 || day==6))) {
        return '10:00';
    }
    else if((vacation==false && day>0 && day<6)) {
        return '7:00';
    }
}

let answer = alarmClock(1, false);
console.log(answer);