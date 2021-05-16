function findOdd(A) {
    let result = A.reduce((acc, curr) => {
        if (typeof acc[curr] == 'undefined') {
          acc[curr] = 1;
        } else {
          acc[curr] += 1;
        }
        return acc;
      }, {});
    let keys = Object.keys(result);
    let values = Object.values(result);
    let index ;
      for(i=0; i<values.length; i++) {
        if(values[i] % 2 !== 0) {
            index = values.indexOf(values[i]);
        }   
      }

    return Number(keys[index]);
    
  }
  console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
  

