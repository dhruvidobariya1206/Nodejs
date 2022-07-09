function countHi(str){
    if(str.length < 2)
          return 0;
            
      if(str.substring(0, 2)=="hi")
          return 1 + countHi(str.substring(2));
                      
      return countHi(str.substring(1));
  }