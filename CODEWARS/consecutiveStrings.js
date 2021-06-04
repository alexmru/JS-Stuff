function longestConsec(strarr, k) {
    if(strarr.length === 0 || k > strarr.length || k <= 0){
        return '';
    }
    let combinedWords = [];
    for(i=0; i<=strarr.length-k; i++) {
        let newWord = strarr.slice(i,i+k).reduce((a,b) => a+b);
        combinedWords.push(newWord);
    }
    console.log(combinedWords);
    let measureLenghts = combinedWords.map(x => x.length);
    return combinedWords[measureLenghts.indexOf(Math.max(...measureLenghts))];
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zaskavorus"],4));