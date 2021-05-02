inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return [];
    } else {
    let finalArray = [];
    let posArray = input.filter(x => x > 0).length;
    let negArray = input.filter(x => x < 0);
    if(negArray.length > 0) {
        negArray = negArray.reduce((a,b) => a+b);
    } else if(negArray.length === 0) {
        negArray = 0;
    }
    finalArray.push(posArray)
    finalArray.push(negArray);
    return finalArray;
}
}
console.log(countPositivesSumNegatives(inputArray));