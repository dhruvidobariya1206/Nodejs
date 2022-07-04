function sleepIn(weekday, vacation){
    if(vacation==true)
    {
      return true;
    }
    else
    {
      if(weekday==false)
      {
        return true;
      }
    }
    return false;
  }
  
  let answer = sleepIn(false, true);
  console.log(answer);