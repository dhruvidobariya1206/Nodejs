function getSandwich(str){
    let start, end, i, ans='', cnt=0;
    
    if(str.length<=10) {
        return '';
    }

    for(i=0; i<str.length-4; i++) {
        if(str.substring(i, i+5)=='bread' && cnt==0) {
            start = i+5;
            cnt++;
        }
        if(str.substring(i, i+5)=='bread' && cnt==1) {
            end = i;
        }
    }
    ans = str.substring(start,end);
    return ans;
}

let answer = getSandwich('xxbreadjambreadyy');
console.log(answer);