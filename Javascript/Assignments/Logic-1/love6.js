function love6(a, b){
    if(a==6 || b==6 || Math.abs(a-b)==6 || a+b==6) {
        return true;
    }
    else {
        return false;
    }
}

let answer = love6(10, 13);
console.log(answer);