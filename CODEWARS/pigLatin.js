function pigIt(str){
    let arr = str.split(' ');
    console.log(arr);
    let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = [];
    for(i=0; i< arr.length; i++) {
        if(alphabet.split('').includes(arr[i].charAt(0))) {
            let firstLetter = arr[i].charAt(0);
            let restOfWord = arr[i].substring(1);
            let word = restOfWord + firstLetter + 'ay';
            result.push(word);
        } else {
            result.push(arr[i]);
        }
    }
    return result.join(' ');
  }

  pigIt('Hello world !'); 


//Solutie super eficienta

// function pigIt(str){
//     return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
//   }

//// SAU //////


// function pigIt(str) {
//     return str.replace(/\w+/g, (w) => {
//       return w.slice(1) + w[0] + 'ay';
//     });
//   }