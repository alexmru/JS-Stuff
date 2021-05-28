function comp(array1, array2){
    if(array1 === null || array2 === null) {
        return false;
    }
    let sortedArr1 = array1.sort((a,b) => a - b).map(x => Math.pow(x, 2));
    let sortedArr2 = array2.sort((a,b) => a - b);
    console.log(sortedArr1);
    console.log(sortedArr2);
    return sortedArr1.every((val, index) => val === sortedArr2[index]);
  
}

  console.log(comp([8, 6, 5, 1, 4, 10, 8, 4, 1, 10, 6, 5, 3, 5],[25, 37, 1, 16, 1, 64, 16, 9, 64, 100, 100, 64, 25, 36]));