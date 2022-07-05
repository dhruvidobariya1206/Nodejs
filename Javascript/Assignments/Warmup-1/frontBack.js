function frontBack(str){
    let f = str.charAt(0);
    let l = str.charAt(str.length);

    let a = str.substring(1, str.length-1);
    let ans = l.concat(a,f);
    return a;
}

let answer = frontBack(false);
  console.log(answer);