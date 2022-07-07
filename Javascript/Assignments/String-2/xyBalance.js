function xyBalance(str){
    let i;
    for(i=str.length; i>=0; i--) {
        if(str.charAt(i)=='x') {
            return false;
        }
        else if(str.charAt(i)=='y') {
            return true;
        }
    }
    return true;
}

let answer = xyBalance('aaxbby');
console.log(answer);