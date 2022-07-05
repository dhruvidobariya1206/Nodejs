function startOz(str){
  
    if (str.substring(0,2)=='oz') {
        return str.substring(0,2);
    }
    else {
        if(str.charAt(1)=='z') {
            return str.charAt(1);
        }
        else if (str.charAt(0)=='o') {
            return str.charAt(0);
        }
        else {
            return '';
        }
    }

}

let answer = missingChar('ozymandias');
  console.log(answer);