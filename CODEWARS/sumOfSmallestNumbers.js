function sumTwoSmallestNumbers(numbers) {  
    let min1 = Math.min(...numbers);
    let arrayWithoutMin1 = numbers.filter(x => x !== min1);
    let min2 = Math.min(...arrayWithoutMin1);
    return min1 + min2;
  }

console.log(sumTwoSmallestNumbers([5, 9, 12, 44, 1234]));

