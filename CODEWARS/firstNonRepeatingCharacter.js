function firstNonRepeatingLetter(s) {
    let arrayS = Array.from(s.toLowerCase());
    for(i=0; i< arrayS.length; i++) {
        const letter = arrayS[i];
        let counter = 0;
        for(j=0; j<arrayS.length; j++) {
            if(arrayS[j] === letter) {
                counter ++
            }
        }
        if(counter === 1) {
            const index = arrayS.indexOf(letter);
            return s.charAt(index);
        } 
    }
    return '';
  }

  console.log(firstNonRepeatingLetter('abba'));

//   function firstNonRepeatingLetter(s) {
//     for(var i in s) {
//       if(s.match(new RegExp(s[i],"gi")).length === 1) {
//         return s[i];
//       }
//     }
//     return '';
//   }