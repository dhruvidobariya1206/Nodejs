function close10(a, b){
  
    if((Math.abs(10-a))<(Math.abs(10-b))) {
        return a;
    }
    else if((Math.abs(10-a))>(Math.abs(10-b))) {
        return b;
    }
    else {
        return 0;
    }

}

let answer = close10(10,2);
  console.log(answer);