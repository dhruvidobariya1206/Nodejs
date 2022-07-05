function altPairs(str){
    let st1='',i;
    for(i=0; i<str.length;i=i+4) {
      st1 = st1.concat(str.substring(i,i+2));
    }
    return st1;
}

let answer = altPairs('CodingHorror');
  console.log(answer);