// function countPositivesSumNegatives(input) {
//     let result = [];
//    if (typeof(input) === null){
//        return [];
//      } else if (input.length >= 0) {
//     let posArray = input.filter(n => n > 0);
//    let negArray = input.filter(n => n < 0);
//    let sumPos = posArray.length;
//    let sumNeg = negArray.reduce((a,b) => a + b);
//    result.push(sumPos);
//    result.push(sumNeg);
//    return result;
//  }
// }

let arr = ["mama", "tata", "oana", "cati" ];

const arr2 = arr.forEach(n => n+ "a");

console.log(arr2);