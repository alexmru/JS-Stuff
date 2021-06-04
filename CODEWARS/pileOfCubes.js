function findNb(m) {
    let sumN= Math.sqrt(m);
    let arrayN = [0];
    let n = 1;
    while(arrayN.reduce((a,b) => a+b) !== sumN){
        if(arrayN.reduce((a,b) => a+b) > sumN) {
            return -1;
        }
        arrayN.push(n);
        n++;

    }
    return arrayN[n-1];
}

console.log(findNb(135440716410000))