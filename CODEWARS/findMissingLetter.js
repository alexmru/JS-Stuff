function findMissingLetter(array) {
    let alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
    let isLowerCase = false;
    for(i=0;i < alphabetStr.length;i++) {
        if(alphabetStr.charAt(i) === array[0]) {
            isLowerCase = true;
        } 
    }
    if(isLowerCase == false) {
        alphabetStr = alphabetStr.toUpperCase();
    }
    // console.log(isLowerCase);

    let alphabet = alphabetStr.split('');
    let firstLetter = alphabet.indexOf(array[0]);
    let lastLetter = alphabet.indexOf(array[array.length-1]);
    let corectValues = alphabet.slice(firstLetter, lastLetter+1);
    for(i=0; i<corectValues.length; i++) {
        if(corectValues[i] !== array[i]) {
            return corectValues[i];
        }
    }
    
}
console.log(findMissingLetter(['O','Q','R','S']));


/// Solutie interesanta -- a folosit string.charCodeAt()

// function findMissingLetter(array)
// {
//    var i=array[0].charCodeAt();
//    array.map(x=>  x.charCodeAt()==i?i++:i);
//    return String.fromCharCode(i);
// }