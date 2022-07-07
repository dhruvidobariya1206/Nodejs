function catDog(str){
    let i, cat=0, dog=0;
    for(i=0; i<str.length; i++) {
        if(str.substring(i,i+3)=='cat') {
            cat++;
        }
        else if(str.substring(i,i+3)=='dog') {
            dog++;
        }
    }
    if(cat==dog) {
        return true;
    }
    else {
        return false;
    }

}

let answer = sameStarChar('xy*yzz');
console.log(answer);