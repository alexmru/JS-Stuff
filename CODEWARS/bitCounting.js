var countBits = function(n) {
    return n.toString(2).split('').map(x => Number(x)).reduce((a,b) => a+b);
  };

  console.log(countBits(1234));