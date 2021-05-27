var uniqueInOrder=function(iterable){
    if(typeof(iterable) === 'string') {
        arr1 = iterable.split('');
    } else {
        arr1 = iterable;
    }
    let unique = [];
    let checker = '';
    for(i=0;i<arr1.length;i++) {
        if(checker !== arr1[i]) {
            checker = arr1[i];
            unique.push(checker);
        }
    }
    return unique;
  }



  console.log(uniqueInOrder('aaabbcccAAA111222AAAB'));