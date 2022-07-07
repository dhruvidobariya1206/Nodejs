function xyzMiddle(str){
    let middle = str.length/2;
    if(str.length<3) {
        return false;
    }
    else if(str.length%2 == 1) {
        if (str.substring(middle-1,middle+2)=='xyz') {
            return true;
        }
        else {
            return false;
        }
    }
    else if (str.substring(middle-1,middle+2)=='xyz' ||
            (str.substring(middle-2,middle+1)=='xyz')) {
          return true;
  } else
      return false;
}

let answer = xyzMiddle('AAxyzBB');
console.log(answer);