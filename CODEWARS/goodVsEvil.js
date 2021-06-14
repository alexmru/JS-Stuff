function goodVsEvil(good, evil){
  let goodArr = good.split(' ');
  let evilArr = evil.split(' ');
  let goodPow = [1,2,3,3,4,10];
  let evilPow = [1,2,2,2,3,5,10];
  let armyGood = [];
  let armyEvil = [];
  for(i=0; i< goodPow.length; i++) {
    armyGood.push(goodArr[i] * goodPow[i])
  }
  let totalPowGood = armyGood.reduce((a,b) => a+b)
  for(i=0; i< evilPow.length; i++) {
      armyEvil.push(evilArr[i] * evilPow[i])
  }
  let totalPowEvil = armyEvil.reduce((a,b) => a+b)
    if(totalPowGood > totalPowEvil) {
        return 'Battle Result: Good triumphs over Evil'
    } else if (totalPowGood === totalPowEvil) {
        return 'Battle Result: No victor on this battle field'
    } else if (totalPowGood < totalPowEvil) {
        return 'Battle Result: Evil eradicates all trace of Good'
    }
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 2 1 1 1 1 2'));
