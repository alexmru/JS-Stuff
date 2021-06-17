function titleCase(title, minorWords) {
    let resultArr = [];

    let titleArr = title.split(' ').map(x => {
      let xArr = x.split('');
      let res = [];
      for(i=0; i<xArr.length; i++) {
        res.push(xArr[i].toLowerCase()); 
      }
      return res.join('');
  });
  if(!minorWords) {
    for(i=0; i< titleArr.length; i++) {
        let word = titleArr[i];
        let wordCap = word.charAt(0).toUpperCase() + word.substring(1);
            resultArr.push(wordCap)
        }
        return resultArr.join(' ');
    }

    let lowerWords = minorWords.split(' ').map(x => {
        let xArr = x.split('');
        let res = [];
        for(i=0; i<xArr.length; i++) {
            res.push(xArr[i].toLowerCase()); 
            }
        return res.join('');
    });

    let theSame = false;
    if(titleArr.length === lowerWords.length) {
        for(i=0; i< titleArr.length; i++) {
            if(titleArr[i] === lowerWords[i]) {
                theSame = true;
            }
        }
    }

    if(theSame) {
        for(i=0; i< titleArr.length; i++) {
            let word = titleArr[i];
            let wordCap = word.charAt(0).toUpperCase() + word.substring(1);
                resultArr.push(wordCap)
            }
            return resultArr.join(' ');
        
    }

  for(i=0; i < titleArr.length; i++) {
      let word = titleArr[i];
      if(lowerWords.includes(word)) {
          resultArr.push(word);
      } else if (!lowerWords.includes(word)) {
          let wordCap = word.charAt(0).toUpperCase() + word.substring(1);
          resultArr.push(wordCap)
      }
  }
  return resultArr.join(' ');
}

console.log(titleCase('aa clash of KINGS'))