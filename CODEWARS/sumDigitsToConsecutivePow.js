function sumDigPow(a, b) {
    let list = [];
    for(i=a; i<=b; i++) {
        list.push(i);
    }
    let digPow = [];
    for(i=0;i<list.length;i++) {
        let number = list[i].toString().split('');
        let sum = [];
        for(j=0;j<number.length;j++) {
            sum.push(Math.pow(number[j], j+1));
        }
        if(list[i] === sum.reduce((a,b) => a+b)) {
            digPow.push(list[i]);
        }
    }
    return digPow;
  }

  console.log(sumDigPow(10,20));