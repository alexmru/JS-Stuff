function digital_root(n) {
    n=n.toString();
    let sum = n.split('').map(x => Number(x)).reduce((a,b) => a+b);
    while(sum > 9) {
        sum = sum.toString();
        sum = sum.split('').map(x => Number(x)).reduce((a,b) => a+b);
    } 
    return sum;
  }

  digital_root(234234777777234);