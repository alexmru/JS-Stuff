function dirReduc(arr){
  let numbers = arr.map(x => {
      if(x === 'NORTH') return '1';
      if(x === 'SOUTH') return '2';
      if(x === 'EAST') return '3';
      if(x === 'WEST')  return '4' ;
  })
  let numberString = numbers.join('');
  let case1 = '12';
  let case2 = '21';
  let case3 = '34';
  let case4 = '43';

  do {
      if(numberString.includes(case1)) {
          let newStr = numberString.replace(case1, '');
          numberString = newStr;
      }
      if(numberString.includes(case2)) {
          let newStr = numberString.replace(case2, '');
          numberString = newStr;
      }
      if(numberString.includes(case3)) {
          let newStr = numberString.replace(case3, '');
          numberString = newStr;
      }
      if(numberString.includes(case4)) {
          let newStr = numberString.replace(case4, '');
          numberString = newStr;
      }
  } while (numberString.includes(case1) || 
            numberString.includes(case2) || 
            numberString.includes(case3) || 
            numberString.includes(case4));

    return numberString.split('').map( x => {
        if(x === '1') return 'NORTH';
        if(x === '2') return 'SOUTH';
        if(x === '3') return 'EAST';
        if(x === '4')  return 'WEST';
    });
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));


// Solutie mult mai simpla prin care se itereaza cu un FOR si se sterg cate doua pozitii

// function dirReduc(arr){
//     var count = 0;
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] === "WEST" && arr[i+1] === "EAST" ||
//           arr[i] === "EAST" && arr[i+1] === "WEST" ||
//           arr[i] === "NORTH" && arr[i+1] === "SOUTH" ||
//           arr[i] === "SOUTH" && arr[i+1] === "NORTH") {
//           arr.splice(i, 2);
//           count++;
//           i--;
//       }
//     }
//     return count === 0 ? arr : dirReduc(arr);
//   }