function noX(str){
    if (str=="") return str;
    if (str.charAt(0) == 'x') return noX(str.substring(1));
    else return str.charAt(0) + noX(str.substring(1));
}


