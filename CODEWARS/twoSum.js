function twoSum(numbers, target) {
    let array = [];
    for(i=0; i<numbers.length; i++) {
        let firstNum = numbers[i];
        let slicedNumbers = numbers.slice(i+1);
        for(j=0; j<slicedNumbers.length; j++) {
            if(firstNum + slicedNumbers[j] === target) {
                array.push(numbers.indexOf(firstNum), numbers.indexOf(slicedNumbers[j],i+1))
                return array;
            }
        }
    }
  }

console.log(twoSum([2,2,3], 4))