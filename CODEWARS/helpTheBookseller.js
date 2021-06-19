function stockList(listOfArt, listOfCat){
    if(listOfArt.length === 0 || listOfCat.length === 0) {
        return '';
    }
    let result = [];
    for(i=0; i < listOfCat.length; i++) {
        let char = listOfCat[i];
        let sum = 0;
        for(j=0; j< listOfArt.length; j++) {
            let number = Number(listOfArt[j].match(/(\d+)/g));
            if(listOfArt[j].charAt(0) === char) {
                sum += number;
            }
        }
        result.push(`(${char} : ${sum})`);
    }
    return result.join(' - ');
  }

console.log(stockList(["ABAR 200", "CDXE 500", "AURS 445", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B"]))