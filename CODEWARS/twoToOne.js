function longest(s1, s2) {
    let uniqueLettersS1 = '';
    let uniqueLettersS2 = '';
    for (i=0; i< s1.length; i++) {
        if (uniqueLettersS1.indexOf(s1.charAt(i)) == -1) {
            uniqueLettersS1 += s1[i];
        }
    }
    for (i=0; i< s2.length; i++) {
        if (uniqueLettersS2.indexOf(s2.charAt(i)) == -1) {
            uniqueLettersS2 += s2[i];
        }
    }

    let joinedString = uniqueLettersS1 + uniqueLettersS2;
    let finalResult ='';
    for (i=0; i< joinedString.length; i++) {
        if(finalResult.indexOf(joinedString.charAt(i)) == -1) {
            finalResult += joinedString[i];
        }

    }
    return finalResult.split('').sort().join('');
}

console.log(longest('hhhxxxaaaabbb', 'aagggggjhhhhjjjssss'));