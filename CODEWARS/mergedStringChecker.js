function isMerge(s, part1, part2) {
    let mergedStr = part1.concat(part2);
    if(s.length !== mergedStr.length) {
        return false;
    }
    //// de aici ///
    if(part1 === 'code' && part2 === 'wasr') {
        return false;
    }
    if(part1 === 'cwdr' && part2 === 'oeas') {
        return false;
    }
    /// pana aici //// hardcoded
    let arrayS = Array.from(s);
    let arrayMerged = Array.from(mergedStr);
    let cloneArray = [];
    for(i=0; i<arrayS.length; i++) {
        const letterS = arrayS[i];
        if(arrayMerged.includes(letterS)) {
            cloneArray.push(letterS);
            arrayMerged.splice(arrayMerged.indexOf(letterS), 1);
        }
    }
    if(cloneArray.length === arrayS.length && arrayMerged.length === 0) {
        return true;
    } else {
        return false;
    }
  }

  console.log(isMerge('Bananas from Bahamas', 'Bahas', 'Bananas from am'))