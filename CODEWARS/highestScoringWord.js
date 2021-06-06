function high(x){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let arrX = x.split(' ');
    let wordsSplit = [];
    for(i=0; i< arrX.length; i++) {
        wordsSplit.push(arrX[i].split(''));
    }
    let valuesArray = [];
    for(i=0; i< wordsSplit.length; i++) {
        let word = wordsSplit[i];
        let wordValue = [];
        for(j=0; j< word.length; j++) {
            wordValue.push(alphabet.indexOf(word[j])+1);
        }
        valuesArray.push(wordValue.reduce((a,b) => a+b));
    }
    let maxIndex = valuesArray.indexOf(Math.max(...valuesArray));
    return arrX[maxIndex];
}

console.log(high('man i need a taxi up to ubud'));


// De tinut minte rezolvarea de mai jos , simpla , folosind array.map 

// function high(x){
//     //transform the input string into array & define a string of alphabetical latin characters
//     var arr = x.split(' ');
//     var str = 'abcdefghijklmnopqrstuvwxyz';
//     //Iterate through the array with input words to find the one with the greatest sum
//     var newArr = arr.map(function(word){
//       var sum = 0;
//       for (var i = 0; i < word.length; i++) {
//         sum += str.indexOf(word[i]);
//       }
//       return sum;
//     });
//     //Return the word with the greatest sum
//     return arr[newArr.indexOf(Math.max(...newArr))];
//   }