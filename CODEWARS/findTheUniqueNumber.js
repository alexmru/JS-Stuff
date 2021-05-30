function findUniq(arr) {
    for(i=0; i<arr.length; i++) {
        if(arr[i] !== arr[i+1] && arr[i] !== arr[i+2] && arr[i+1] === arr[i+2]) {
            return arr[i];
        } else if(arr[i+1] !== arr[i] && arr[i+1] !== arr[i+2] && arr[i] === arr[i+2]) {
            return arr[i+1];
        } else if(arr[i+2] !== arr[i] && arr[i+2] !== arr[i+1] && arr[i] === arr[i+1]) {
            return arr[i+2];
        } 
    }
  }


console.log(findUniq([ 1, 1, 1,1,1,1,1,1,5,1 ]));

// SOLUTIA DE MAI JOS ESTE GENIALA 

// function findUniq(arr) {
//     arr.sort((a,b)=>a-b);
//     return arr[0]==arr[1]?arr.pop():arr[0]
//   }