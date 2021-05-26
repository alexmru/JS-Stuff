function tribonacci(signature,n){
    let elements = signature;
    if(n == 0) {
        return [];
    } 
    if(n == 1) {
       let arr = [];
       arr.push(signature[0]);
       return arr;
    }
    if(n == 2) {
        elements = signature.pop();
        return elements;
    }
    if(n == 3) {
        return signature;
    }
    for(i=signature.length; i < n; i++) {
        let nextElement = elements.slice(elements.length - 3).reduce((a,b) => a + b);
        elements.push(nextElement);
    }
    return elements;
  }

  console.log(tribonacci([0.5,0.5,0.5],30));
