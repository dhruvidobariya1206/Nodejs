function getSandwich(str){
    let start, end, i, j, cnt=0;
    for(i=0, j=str.length-1; i<j; i++,j--) {
        if(str.substring(i,i+5)=='bread' && cnt==0) {
            cnt++;
            start = i+1;
        }
        if(str.substring(j-5,j)=='bread' && cnt==0) {
            cnt++;
            end = i;
        }
    }
    if(start>5) {
        return str.substring(start,end);
    }
    else {
        return '';
    }
}

let answer = getSandwich('xxbreadjambreadyy');
console.log(answer);