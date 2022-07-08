function linearIn(outer, inner){
    let numFound=0;
    let k = 0;
      for(let i = 0; i < outer.length; i++) {
         if(outer[i] == inner[k]) {
            numFound++;
            k++;
         } else if(outer[i] > inner[k]) {
            return false;
         }
         
         if(numFound == inner.length)
            return true;
      }
          
      return false;
    
}

let answer = linearIn([1, 2, 4, 6], [2, 4]);
console.log(answer);