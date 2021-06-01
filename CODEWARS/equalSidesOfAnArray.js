function findEvenIndex(arr){
    for(i=0; i<arr.length; i++) {
        let firsHalf; 
        let secondHalf;
        if(i === 0) {
            firsHalf = 0;
            secondHalf = arr.slice(i+1, arr.length).reduce((a,b) => a+b, 0);
        } else if (i > 0 && i< arr.length-1){
            firsHalf = arr.slice(0,i).reduce((a,b) => a+b, 0);
            secondHalf = arr.slice(i+1, arr.length).reduce((a,b) => a+b, 0);
        } else if (i === arr.length-1) {
            firsHalf = arr.slice(0,i).reduce((a,b) => a+b, 0);
            secondHalf = 0;
        }
        console.log(firsHalf, secondHalf);
        if(firsHalf === secondHalf) {
            return i;
        }
    }
    return -1;
}

console.log(findEvenIndex([0,10,30,10,10,15,35]));