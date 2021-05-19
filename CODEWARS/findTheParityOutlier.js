function findOutlier(integers){
    let result = integers.map(x => x%2);
    let oddPositives = result.filter(x => x > 0).length;
    let oddNegatives = result.filter(x => x < 0).length;
    let zeroCheck = result.filter(x => x === 0).length;

    if (oddPositives === 1 && oddNegatives === 0) {
        let outlierPos = result.indexOf(1);
        return integers[outlierPos];
    } else if(oddNegatives === 1 && oddPositives === 0) {
        let outlierPos = result.indexOf(-1);
        return integers[outlierPos];
    } else if (zeroCheck === 1) {
        let outlierPos = result.indexOf(0);
        return integers[outlierPos];
    }
  }
  console.log(findOutlier([-91362929,169805367,-134815430,-188601757,-162384477,-120668261]));
  console.log(findOutlier([141515846,187406182,132202500,111701724,-17862630,-164097612,104953390,146880070,68956122,-199194388,-101036306,-70598008,17436882,-85209422,-171953932,166498286,63171152,-107735230,160402308,160179772,189878657,-128381492,99134666,16368820,101797054,31562644,-150178706,-101858436,-163873482,51384986,99746170,-81278952,188017208,144630704,148795976,-95254674,94358428,37259502,47398556,-190372278,-158381686,-159898138,100222980,102188058,-4947878,-14405190,-52790898]));


  //Solutia gasita de altii mai destepti :)

//   function findOutlier(integers){
//     var even = integers.filter(a=>a%2==0);
//     var odd = integers.filter(a=>a%2!==0);
//     return even.length==1? even[0] : odd[0];
//   }