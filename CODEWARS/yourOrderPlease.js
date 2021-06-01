function order(words){
  let wordsArray = words.split(' ');
  let sortedArray = [];
  for(j=1; j<=wordsArray.length;j++) {

  for(i=0; i< wordsArray.length; i++) {
    if(wordsArray[i].includes(`${j}`)){
        sortedArray.push(wordsArray[i])
            }
        }
    }
   return sortedArray.join(' ');
}

order('4of Fo1r pe6ople g3ood th5e the2')