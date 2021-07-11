const arrayOfNumbers = [5, 2, 5, 6, 9, 11, 11, 3, 12, 4, 1, 20, 44, 56, 27, 19, 7];
const greaterThanFive = arrayOfNumbers.filter(x => x>5);
const mappedObjects = arrayOfNumbers.map(x =>({num: x}))
const sumOfArray = arrayOfNumbers.reduce((a,b) => a + b);
console.log(mappedObjects)
// console.log(greaterThanFive, sumOfArray);

const findMinMax = (list) => {
    const max = Math.max(...list);
    const min = Math.min(...list);
    return [min, max];
}

const [min, max] = findMinMax(arrayOfNumbers)

console.log(min, max);

let arrayOfUnique = new Set(arrayOfNumbers);
console.log(arrayOfUnique);
arrayOfUnique.add(10);
console.log(arrayOfUnique);

