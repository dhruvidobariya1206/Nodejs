function front11(a, b){
    if (a.length == 0 && b.length == 0)
      return []
    else if (a.length !=0 && b.length == 0)
      return [a[0]]
    else if (a.length == 0 && b.length != 0)
      return [b[0]]
    else
      return [a[0],b[0]]
  }

let answer = front11([], []);
console.log(answer);