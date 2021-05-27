function iqTest(numbers){
    let numbersArray = numbers.split(' ');
    let unknown = numbersArray.filter(x => x % 2 === 0);
    if(unknown.length > 1) {
        for(i=0; i < numbersArray.length; i++) {
            if(numbersArray[i] % 2 != 0) {
                return numbersArray.indexOf(numbersArray[i]) + 1;
            }
        }
    } else if(unknown.length === 1) {
        for(i=0; i < numbersArray.length; i++) {
            if(numbersArray[i] % 2 === 0) {
                return numbersArray.indexOf(numbersArray[i]) + 1;
            }
        }
    }
}

console.log(iqTest("2 4 7 8 10"))