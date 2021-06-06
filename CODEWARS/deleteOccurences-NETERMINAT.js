function deleteNth(arr,n){
    let comparator =[...new Set(arr)];
    let result = [];
    console.log(comparator);
    for(i=0; i < comparator.length; i++) {
        let checker = comparator[i];
        let counter = 0;
        for(j=0; j < arr.length; j++) {
            if(arr[j] === checker) {
                counter++;
                if(counter > n) {
                    arr.splice(arr[j],1);
                }
            }   
        }
    }
    return arr;
  }

console.log(deleteNth([14, 14, 19, 14, 19, 4, 4, 4, 19, 4, 14, 14, 4, 19, 4, 19, 4, 4, 19], 1));