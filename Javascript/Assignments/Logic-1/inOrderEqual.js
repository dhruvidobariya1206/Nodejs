function inOrderEqual(a, b, c, equalOk){
    
        if((a<=b && b<=c && equalOk==true) || (a<b && b<c && equalOk==false)) {
            return true;
        }
        else {
            return false;
        }

}

let answer = inOrderEqual(2, 5, 11, false);
console.log(answer);