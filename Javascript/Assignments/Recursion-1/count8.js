function count8(n){
    if(n==0)
        return 0;
    if(n%10==8 && (Math.floor(n/10))%10==8)
        return 2+count8(Math.floor(n/10));
    else if(n%10==8)
        return 1+count8(Math.floor(n/10));
    return count8(Math.floor(n/10));
}