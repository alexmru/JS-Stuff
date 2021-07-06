// function scramble(str1, str2) {
//  let arrOfStr2 = str2.split('');
//  let arrOfStr1 = str1.split('');
//  for(i=0;i<arrOfStr2.length; i++) {
//     let char = arrOfStr2[i];
//     if(arrOfStr1.includes(char)) {
//         arrOfStr1.splice(arrOfStr1.indexOf(char), 1);
//     } else {
//         return false;
//     }
//  }
//  return true;
 
// }
//// Merge pentru stringuri normale , dar pentru teste cu mii de caractere este prea incet


function scramble(str1, str2) {
    let arrOfStr2 = str2.split('');
    let arrOfStr1 = str1.split('');
}


console.log(scramble('katasksjdfskjdfhwerpzxczxckmnjnasijdnhybibiasd','steaksijfhhqeurydkakjqhdks'))