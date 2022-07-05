function intMax(a, b, c){
  
    if (a>b && a>c) {
        return a;
    }
    else {
        if(b>c) {
            return b;
        }
        else {
            return c;
        }
    }

}

let answer = intMax(10,20,30);
  console.log(answer);