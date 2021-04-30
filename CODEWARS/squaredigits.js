function squareDigits(num){
    const numArray = num.toString().split('').map(x => x*x);
    const strArray = numArray.map(x => x.toString());
    const joinedArr = strArray.join('');
    const finalRes = Number(joinedArr);
    return finalRes;
    console.log(finalRes);
  }

squareDigits(456);