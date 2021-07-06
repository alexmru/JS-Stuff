function duplicateCount(text){
    let array = text.toLowerCase().split('');
    let duplicates = [];
    let uniques = [];
    for(i=0; i<array.length; i++) {
        let counter = 0;
        for(j=0; j<array.length; j++) {
            if(array[j] === array[i]) {
                counter++;
            }
        }
        if(counter > 1 && !uniques.includes(array[i])) {
            duplicates.push(1);
        }
        uniques.push(array[i]);
    }
    return duplicates.length;
  }

console.log(duplicateCount('aabBcde'));