function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let arr = [];
    let charAti ;
    for(i=0; i< text.length; i++) {
        charAti = text[i].toLowerCase();
        if(alphabet.indexOf(charAti) !== -1) {
            arr.push(alphabet.indexOf(charAti));
        }
    }
    return arr.join(' ');
  }

  console.log(alphabetPosition("This'' is getting interesting"));