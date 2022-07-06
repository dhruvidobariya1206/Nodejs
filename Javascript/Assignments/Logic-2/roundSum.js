function roundSum(a, b, c) {
      return round10(a) + round10(b) + round10(c);

    }

    function round10(n) {
      if (n % 10 < 5) {
        return n - (n%10);
      }
      else {
        return n + (10 - (n%10));
      }
        
    }
    
    let answer = roundSum(16, 17, 18);
    console.log(answer);