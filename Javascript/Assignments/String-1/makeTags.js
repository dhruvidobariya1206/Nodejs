function makeTags(tag, word){

    const tg = document.createElement(tag);
    return tg.innerHTML = word;
}

let answer = makeTags('i', 'Hello');
  console.log(answer);