function delDel(str){
  
    if(str.indexOf('del')==1) {
        return str.replace('del','');
    }
    else {
        return str;
    }

}

let answer = delDel('cbdel');
  console.log(answer);