function front3(str){
  
 
    let fnt = str.substring(0,3);
    return fnt.concat(fnt,fnt);
  
}

let answer = front3(false);
  console.log(answer);