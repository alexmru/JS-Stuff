function arrayDiff(a, b) {
    let filteredArray = a.map(x => b.includes(x) ? 'not' : x);
    let resultArray = filteredArray.filter(x => x != 'not');
    console.log(resultArray);
  }

  arrayDiff([20,-20,9,13,18,5,-4,-17,5,-6,10,18,18,-2,-17,-10,3,-18],[-20,-4,-10,-17,18,5,-2,10,-18,9,3]);