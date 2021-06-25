function anagrams(word, words) {
    let sortedWord = word.split('').sort().join('');
    return words.filter(x => x.split('').sort().join('') === sortedWord);
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));