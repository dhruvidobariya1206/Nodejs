function middleThree(str){
    // console.log("function");
    let i,j;
    for(i=0,j=str.length-1; i!=j; i++,j--) {
    //   console.log(i,j);
    }
    return str.substring(i-1,j+2);
}

let answer = middleThree('solving');
  console.log(answer);