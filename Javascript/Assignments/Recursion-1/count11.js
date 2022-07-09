function count11(str){
    if (str.length < 2)
        return 0;
    if (str.substring(0,2)=="11")
        return 1 + count11(str.substring(2));
    else
        return count11(str.substring(1));
}