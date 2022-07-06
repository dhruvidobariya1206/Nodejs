function left2(str){
    return str.substring(2,str.length) + str.substring(0,2);
}

let answer = left2(hello);
console.log(answer);