//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

function rot13(message){
    let alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
    let alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = message.split('').map(x => {
        if(alphabet.includes(x)) {
            return alphabet[alphabet.indexOf(x) + 13];
        } else if (alphabetUpperCase.includes(x)) {
            return alphabetUpperCase[alphabetUpperCase.indexOf(x) +13];
        } else return x;
    })
    return result.join('');
  }

  console.log(rot13('test'));

