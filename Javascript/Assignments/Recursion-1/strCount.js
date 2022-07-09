function strCount(str, sub){
    if(str.length < sub.length)
          return 0;
            
      if(str.substring(0, sub.length)==sub)
          return 1 + strCount(str.substring(sub.length), sub);
                      
      return strCount(str.substring(1), sub);
  }