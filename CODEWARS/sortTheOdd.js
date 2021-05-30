function sortArray(array) {
    let envenAndOdd = array.map(x=> x %2 === 0 ? x : 'odd');
    let onlyOdd = array.filter(x => x %2 !== 0).sort((a,b) => a-b);
    let counter = 0;
    for(i=0; i< envenAndOdd.length; i++) {
        if(envenAndOdd[i] === 'odd') {
            envenAndOdd[i] = onlyOdd[counter];
            counter ++;
        }
    }
    return envenAndOdd;
  }

  console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));


  // Se rezolva cu array.shift() -> care sterge un element dintr-un array si il returneaza

//   function sortArray(array) {
//     const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//     return array.map((x) => x % 2 ? odd.shift() : x);
//   }