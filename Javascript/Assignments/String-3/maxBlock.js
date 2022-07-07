function maxBlock(str){
    let cnt=0,temp=1;

    if (str.length == 0)
    return 0;

    for (let i = 0; i < str.length; i++) {
    if (i < str.length-1 && str.charAt(i) == str.charAt(i+1))
      temp++;
    else
      temp = 1;
    if (temp > cnt)
      cnt = temp;
  }
  return cnt;
}

let answer = maxBlock('abbCCCddBBBxx');
console.log(answer);