function middleTwo(str){
  let i,j;
  for(i=0,j=str.length-1; i<j-1; i++,j--) {
    // console.log(str.charAt(i),str.charAt(j));
  }
  return str.charAt(i)+str.charAt(j);
}

let answer = middleTwo('Practice');
  console.log(answer);