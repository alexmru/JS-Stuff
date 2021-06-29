function orderWeight(strng) {
    // transformam stringul de numere intr-un array de stringuri
   strng = strng.replace(/\s+/g, ' '); 
   let numbersArray = strng.split(' ');
   // mapam array-ul , inlocuind fiecare element cu suma cifrelor lui
   let orderedWeights = numbersArray.map(x => {
       let xArr = x.split('').map(n => Number(n));
       return xArr.reduce((a,b) => a + b)
        });
    // creem un array de subarray-uri (2 elemente fiecare : numarul initial si suma cifrelor lui)
   const numAndWeight = [];
   for(i=0; i<numbersArray.length; i++) {
        numAndWeight.push([numbersArray[i], orderedWeights[i]]);
   }
   // sortam array-ul creat in functie de elementul de pe pozitia 1 al fiecarui subarray
    const sortedWeights = numAndWeight.sort((a, b) => a[1] - b[1]);
    let weights = [...new Set(numAndWeight.map(x => x[1]))]
   // sortam inca odata , conform cerintei , pentru cazul in care avem subarray-uri cu aceeasi valoare a sumei
    let sorted = [];
    for(i=0; i< weights.length; i++) {
        let sameValue =[];
        for(j=0; j<sortedWeights.length;j++) {
            if(sortedWeights[j][1] === weights[i]) {
                sameValue.push(sortedWeights[j]);
            }
        }
        sameValue = sameValue.sort()
        for(n=0; n< sameValue.length; n++) {
            sorted.push(sameValue[n])
        }
    }
    let result = [];
    for(i=0; i<sorted.length; i++) {
        result.push(sorted[i][0])
    }
    return result.join(' ');
    
}

console.log(orderWeight('103 123 4444 99 2000 2000 10003 1234000 44444444 9999 11 11 22 123'));

// NEREZOLVAT
// nu am reusit sa il fac sa functioneze in momentul in care in stringul dat se gaseste new line sau carriage return