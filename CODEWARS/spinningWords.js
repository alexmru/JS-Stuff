function spinWords(string){
    let words = string.split(' ');
    let result = [];
    for(i=0; i<words.length; i++) {
        if(words[i].length >= 5) {
            words[i] = words[i].split('').reverse().join('');
        }
        result.push(words[i]);
    }
    result = result.join(' ');
    return result;
    
  }

spinWords("Hello there my friend");