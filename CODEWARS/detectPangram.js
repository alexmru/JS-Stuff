function isPangram(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let arr = string.toLowerCase().split('');
    for(i=0; i<arr.length; i++) {
        let letter = arr[i];
        for(j=0; j< alphabet.length; j++) {
            if(alphabet[j] === letter) {
                alphabet.splice(alphabet.indexOf(letter), 1);
            }
        }
    }
    console.log(alphabet);
    if( alphabet.length > 0 ) {
        return false ;
    } else if(alphabet.length === 0) {
        return true;
    }

  }
console.log(isPangram('Pack my box with five dozen liquor jugs.'))

//// Rezolvare folosind array.every()

// function isPangram(string){
//     string = string.toLowerCase();
//     return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//       return string.indexOf(x) !== -1;
//     });
//   }
