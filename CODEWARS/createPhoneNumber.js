function createPhoneNumber(numbers){
  let string = numbers.map(x => x.toString());
  let prefix ='';
  let firstPart = '';
  let secondPart = '';
  for(i=0; i< 3; i++) {
      prefix += string[i];
  }
  for(i=3; i< 6; i++) {
      firstPart += string[i];
  }
  for(i=6; i< string.length; i++) {
    secondPart += string[i];
    }

  return `(${prefix}) ${firstPart} ${secondPart}`;
}

console.log(createPhoneNumber([1,2,3,4,5,5,6,7,7,8]));

// Super solutie !!! 

// function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";
    
//     for(var i = 0; i < numbers.length; i++)
//     {
//       format = format.replace('x', numbers[i]);
//     }
    
//     return format;
//   }