function endOther(a, b){
    a = a.toLowerCase();
  b = b.toLowerCase();
    if(a.length<=b.length) {
        if(b.substring(b.length-a.length,b.length)==a) {
            return true;
        }
        else {
            return false;
        }
    }
    else if(a.length>b.length) {
        if(a.substring(a.length-b.length,a.length)==b) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

let answer = endOther('Hiabc', 'abc');
console.log(answer);