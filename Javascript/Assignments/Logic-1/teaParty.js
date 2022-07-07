function teaParty(tea, candy){
    if(tea<5 || candy<5) {
        return 0;
    }
    else if(tea>=candy*2 || candy>=tea*2) {
        return 2;
    }
    else {
        return 1;
    }
}

let answer = teaParty(6, 8);
console.log(answer);
