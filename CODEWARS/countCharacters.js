function count (string) {  
    let strArr = string.split('');
    let values = [];
    let checked = [];
    for(i=0; i<strArr.length; i++) {
        let counter = 0;
        let letter = strArr[i];
        if(!checked.includes(letter)) {
            checked.push(letter);
            for(j=0; j<strArr.length; j++) {
                if(letter === strArr[j]) {
                    counter++;
                }
            }
        }
        if(counter !== 0) {
        values.push(counter);
        }
    }
    console.log(checked, values);
    let result = {};
    checked.forEach((key,i) => result[key] = values[i]);
    console.log(result);
    return result;
  }

  count('asdasdssssddfffaaa')

  //// solutie super eficienta 

//   function count (string) {  
//     var count = {};
//     string.split('').forEach(function(s) {
//        count[s] ? count[s]++ : count[s] = 1;
//     });
//     return count;
//   }