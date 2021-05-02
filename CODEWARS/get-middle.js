const str1 = 'George';
const str2 = 'Ovidius';

function getMiddle(str) {
  const length = str.length;
  if (length % 2 === 0) {
    return str.substring((length/2 - 1), (length/2 + 1));
  } else if(length % 2 !== 0) {
    return str.substring((length/2), (length/2 +1));
  }
  
}

console.log(getMiddle(str1));
console.log(getMiddle(str2));