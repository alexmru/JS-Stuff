// let arr1 = [-7, 1, 2, 3, 4];
// let max = Math.max(...arr1);
// let min = Math.min(...arr1);
// console.log(max);
// console.log(min);



function highAndLow(numbers) {
    numArray = numbers.split(' ').map(n => +n);
    // let max = Math.max(...numArray);
    // let min = Math.min(...numArray);
    // return `${max} ${min}`;
    return numArray;
}

console.log(highAndLow('1 2 3'));