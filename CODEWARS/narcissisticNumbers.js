function narcissistic(value) {
  let power = value.toString().length;
  let numbers = value.toString().split('');
  let numbersToPow = [];
  for(i=0; i<numbers.length; i++) {
      let element = Number(numbers[i]);
      numbersToPow.push(Math.pow(element, power))
  }
  if(numbersToPow.reduce((a,b) => a+b) === value) {
      return true;
  } else {
      return false;
  }
}

console.log(narcissistic(153))