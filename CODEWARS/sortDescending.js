// const numbers = [2, 7, 14, 1, 34, 105];
// const sorted = numbers.sort((a, b) => b - a);
// console.log(sorted);

function descendingOrder(n){
const sortArr = n.toString().split('').map(x => +x);
const result = Number(sortArr.sort((a, b) => b-a).join(''));
return result; 
}

descendingOrder(4732);