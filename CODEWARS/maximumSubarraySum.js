var maxSequence = function(arr){
    let sums = [];
    for(i=0; i< arr.length-1; i++) {
        for(j=i+1; j< arr.length; j++) {
            let arraySum = arr.slice(i,j+1).reduce((a,b) => a+b);
            sums.push(arraySum)
        }
        
    }
    if(sums.filter(x => x> -1).length === 0) {
        return 0;
    }
    return Math.max(...sums);
  }

  console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))