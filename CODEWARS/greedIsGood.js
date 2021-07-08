function score( dice ) {
    let points = 0;
    let sortedInput = dice.sort((a,b) => a - b).join('');
    let cutInput = sortedInput;
    if(sortedInput.includes('111')) {
        points = points + 1000;
        cutInput = sortedInput.replace('111', '');
    } else if(sortedInput.includes('666')) {
        points = points + 600;
        cutInput = sortedInput.replace('666', '');
    } else if(sortedInput.includes('555')) {
        points = points + 500;
        cutInput = sortedInput.replace('555', '');
    } else if(sortedInput.includes('444')) {
        points = points + 400;
        cutInput = sortedInput.replace('444', '');
    } else if(sortedInput.includes('333')) {
        points = points + 300;
        cutInput = sortedInput.replace('333', '');
    } else if(sortedInput.includes('222')) {
        points = points + 200;
        cutInput = sortedInput.replace('222', '');
    }
    let remainingInput = Array.from(cutInput);
    for(item of remainingInput) {
        if(item === '1') {
            points = points + 100;
        } else if(item === '5') {
            points = points + 50;
        }
    }
    return points;
  }

  console.log(score([1,4,4,1,1]));


  /// Rezolvare cu Regex

//   function score( dice ) {
//     if (dice.length !== 5) return 0;
    
//     let diceStr = dice.sort().join('');
//     let score = 0;
//     const rules = [
//       { reg: /111/, score: 1000 },
//       { reg: /666/, score: 600 },
//       { reg: /555/, score: 500 },
//       { reg: /444/, score: 400 },
//       { reg: /333/, score: 300 },
//       { reg: /222/, score: 200 },
//       { reg: /1/,   score: 100 },
//       { reg: /5/,   score: 50 },
//     ];
    
//     rules.forEach(rule => {
//       while (rule.reg.test(diceStr)) {
//         diceStr = diceStr.replace(rule.reg, '');
//         score += rule.score;
//       }
//     });
    
//     return score;
//   }