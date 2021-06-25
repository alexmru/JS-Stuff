var moveZeros = function (arr) {
    let zeros = [];
    let nonZeros = [];
    for(i=0; i<arr.length; i++) {
        if(arr[i] === 0) {
            zeros.push(arr[i]);
        } else if (arr[i] !== 0) {
            nonZeros.push(arr[i]);
        }
    }  
    console.log(nonZeros);
    console.log(zeros);
    return nonZeros.concat(zeros);
  }

  console.log(moveZeros([9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9 ]));